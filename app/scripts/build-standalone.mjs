#!/usr/bin/env node
/**
 * Build standalone CRAFT Explorer distributions for Windows, macOS and Linux.
 *
 * Creates platform-specific ZIP archives that include:
 * - Portable Node.js binary (no installation required)
 * - Fully bundled server (all dependencies embedded)
 * - Built Vue frontend
 * - Question bank YAMLs + pre-seeded demo data
 * - Launcher script (double-click to start)
 *
 * Usage: node scripts/build-standalone.mjs
 *        npm run build:standalone
 */

import { execSync } from 'node:child_process'
import { mkdirSync, cpSync, writeFileSync, existsSync, rmSync, readdirSync, chmodSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const APP_DIR = join(__dirname, '..')
const OUT_DIR = join(APP_DIR, 'standalone')
const YAML_DIR = join(APP_DIR, '..', 'deliverables', 'question_banks')
const NODE_VERSION = 'v22.22.0'

// Linux build node — used to run vite/esbuild when local Node is too old
const BUILD_NODE = {
  archive: `node-${NODE_VERSION}-linux-x64.tar.gz`,
  url: `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.gz`,
  nodeBin: `node-${NODE_VERSION}-linux-x64/bin/node`,
}

const PLATFORMS = [
  {
    name: 'windows-x64',
    archive: `node-${NODE_VERSION}-win-x64.zip`,
    url: `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-win-x64.zip`,
    nodeBin: `node-${NODE_VERSION}-win-x64/node.exe`,
    targetBin: 'node.exe',
    launcher: 'start.bat',
  },
  {
    name: 'macos-arm64',
    archive: `node-${NODE_VERSION}-darwin-arm64.tar.gz`,
    url: `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-darwin-arm64.tar.gz`,
    nodeBin: `node-${NODE_VERSION}-darwin-arm64/bin/node`,
    targetBin: 'node',
    launcher: 'start.command',
  },
  {
    name: 'macos-x64',
    archive: `node-${NODE_VERSION}-darwin-x64.tar.gz`,
    url: `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-darwin-x64.tar.gz`,
    nodeBin: `node-${NODE_VERSION}-darwin-x64/bin/node`,
    targetBin: 'node',
    launcher: 'start.command',
  },
  {
    name: 'linux-x64',
    archive: `node-${NODE_VERSION}-linux-x64.tar.gz`,
    url: `https://nodejs.org/dist/${NODE_VERSION}/node-${NODE_VERSION}-linux-x64.tar.gz`,
    nodeBin: `node-${NODE_VERSION}-linux-x64/bin/node`,
    targetBin: 'node',
    launcher: 'start.sh',
  },
]

const LAUNCHER_BAT = `@echo off
echo.
echo   CRAFT Explorer startet...
echo   Browser oeffnet sich gleich unter http://localhost:3000
echo   Zum Beenden: Dieses Fenster schliessen.
echo.
set DATA_DIR=%~dp0server-data
set DIST_DIR=%~dp0dist
set HOST=0.0.0.0
set PORT=3000
set OPEN_BROWSER=1
"%~dp0node.exe" "%~dp0server.mjs"
`

const LAUNCHER_COMMAND = `#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
echo ""
echo "  CRAFT Explorer startet..."
echo "  Browser oeffnet sich gleich unter http://localhost:3000"
echo "  Zum Beenden: Ctrl+C oder dieses Fenster schliessen."
echo ""
DATA_DIR="$DIR/server-data" DIST_DIR="$DIR/dist" HOST=0.0.0.0 PORT=3000 OPEN_BROWSER=1 "$DIR/node" "$DIR/server.mjs"
`

const LAUNCHER_SH = `#!/bin/bash
DIR="$(cd "$(dirname "$0")" && pwd)"
echo ""
echo "  CRAFT Explorer startet..."
echo "  Erreichbar unter http://localhost:3000"
echo "  Im Netzwerk: http://$(hostname -I 2>/dev/null | awk '{print $1}'):3000"
echo "  Zum Beenden: Ctrl+C"
echo ""
DATA_DIR="$DIR/server-data" DIST_DIR="$DIR/dist" HOST=0.0.0.0 PORT=3000 "$DIR/node" "$DIR/server.mjs"
`

const README_TXT = `CRAFT Explorer — Standalone Version
====================================

Starten:
  Windows:  Doppelklick auf "start.bat"
  macOS:    Doppelklick auf "start.command"
            (Beim ersten Mal: Rechtsklick → Oeffnen, um Gatekeeper zu bestaetigen)
  Linux:    ./start.sh  (ggf. vorher: chmod +x start.sh)

Der Browser oeffnet sich automatisch unter http://localhost:3000
(Linux: URL manuell im Browser oeffnen)

Beenden:
  Das Konsolenfenster schliessen (Windows) oder Ctrl+C druecken (Mac/Linux).

Daten:
  Alle Daten liegen im Ordner "server-data/" und bleiben nach Neustart erhalten.
  Demo-Daten sind vorinstalliert — einfach im Facilitator-Dashboard ansehen.

Netzwerk:
  Der Server ist standardmaessig unter Port 3000 im lokalen Netzwerk erreichbar.
  Andere Teilnehmer im gleichen Netzwerk koennen ueber http://<deine-IP>:3000 beitreten.
`

// ── Helpers ──────────────────────────────────────────────────────────────────

function run(cmd, opts = {}) {
  console.log(`  $ ${cmd}`)
  execSync(cmd, { stdio: 'inherit', cwd: APP_DIR, ...opts })
}

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true })
}

// ── Steps ────────────────────────────────────────────────────────────────────

/** Download and extract a Node 22 binary for building (Vite 7 needs Node 20+) */
function ensureBuildNode() {
  const cacheDir = join(OUT_DIR, '.cache')
  ensureDir(cacheDir)
  const archivePath = join(cacheDir, BUILD_NODE.archive)
  const buildNodePath = join(cacheDir, 'node-build')

  if (existsSync(buildNodePath)) {
    console.log('  Build Node.js: cached')
    return buildNodePath
  }

  if (!existsSync(archivePath)) {
    console.log(`  Downloading build Node.js (${NODE_VERSION} linux-x64)...`)
    execSync(`curl -fSL -o "${archivePath}" "${BUILD_NODE.url}"`, { stdio: 'inherit' })
  }

  // Extract just the node binary
  execSync(`tar -xzf "${archivePath}" --strip-components=2 -C "${cacheDir}" "${BUILD_NODE.nodeBin}"`, { stdio: 'pipe' })
  // Rename to node-build to avoid conflicts
  const extracted = join(cacheDir, 'node')
  if (existsSync(extracted)) {
    cpSync(extracted, buildNodePath)
    chmodSync(buildNodePath, 0o755)
    rmSync(extracted)
  }

  return buildNodePath
}

function buildFrontend(buildNode) {
  console.log('\n📦 Building frontend...')
  run('npm run copy-yamls')
  // Use Node 22 for vue-tsc and vite (Vite 7 requires Node 20+)
  const npxPath = join(APP_DIR, 'node_modules', '.bin')
  run(`"${buildNode}" "${join(npxPath, 'vue-tsc')}" -b`)
  run(`"${buildNode}" "${join(npxPath, 'vite')}" build`)
}

function buildServer() {
  console.log('\n📦 Bundling server (standalone, all deps embedded)...')
  // esbuild is a native binary — use it directly (works with any Node version)
  // Banner provides a real require() for Fastify's CJS dependencies in the ESM bundle
  const banner = "import{createRequire}from'module';const require=createRequire(import.meta.url);"
  run(`npx esbuild server/index.ts --bundle --platform=node --format=esm --outfile=server-dist/index.mjs --banner:js="${banner}"`)
}

function downloadNode(platform) {
  const cacheDir = join(OUT_DIR, '.cache')
  ensureDir(cacheDir)
  const archivePath = join(cacheDir, platform.archive)

  if (existsSync(archivePath)) {
    console.log(`  Cache hit: ${platform.archive}`)
    return archivePath
  }

  console.log(`  Downloading ${platform.url}...`)
  execSync(`curl -fSL -o "${archivePath}" "${platform.url}"`, { stdio: 'inherit' })
  return archivePath
}

function extractNodeBinary(archivePath, platform, destDir) {
  const dest = join(destDir, platform.targetBin)

  if (platform.archive.endsWith('.zip')) {
    // Windows: extract node.exe from ZIP using Python (more portable than unzip)
    const pyScript = `
import zipfile, sys, os
with zipfile.ZipFile("${archivePath.replace(/\\/g, '/')}") as z:
    member = "${platform.nodeBin.replace(/\\/g, '/')}"
    data = z.read(member)
    dest = os.path.join("${destDir.replace(/\\/g, '/')}", "${platform.targetBin}")
    with open(dest, "wb") as f:
        f.write(data)
`
    execSync(`python3 -c '${pyScript}'`, { stdio: 'pipe' })
  } else {
    // macOS/Linux: extract node binary from tar.gz
    execSync(`tar -xzf "${archivePath}" --strip-components=2 -C "${destDir}" "${platform.nodeBin}"`, { stdio: 'pipe' })
  }

  if (!existsSync(dest)) {
    throw new Error(`Node binary not found at ${dest}`)
  }

  // Ensure executable on unix
  if (!platform.archive.endsWith('.zip')) {
    chmodSync(dest, 0o755)
  }
}

function createPlatformBundle(platform) {
  console.log(`\n🔧 Creating bundle: craft-explorer-${platform.name}`)
  const bundleDir = join(OUT_DIR, `craft-explorer-${platform.name}`)

  // Clean previous build
  if (existsSync(bundleDir)) {
    rmSync(bundleDir, { recursive: true })
  }
  ensureDir(bundleDir)

  // 1. Node.js binary
  console.log('  Extracting Node.js binary...')
  const archivePath = downloadNode(platform)
  extractNodeBinary(archivePath, platform, bundleDir)

  // 2. Bundled server
  console.log('  Copying server bundle...')
  cpSync(join(APP_DIR, 'server-dist', 'index.mjs'), join(bundleDir, 'server.mjs'))

  // 3. Built frontend
  console.log('  Copying frontend dist...')
  cpSync(join(APP_DIR, 'dist'), join(bundleDir, 'dist'), { recursive: true })

  // 4. Server data (question banks)
  console.log('  Copying question banks...')
  const qbDir = join(bundleDir, 'server-data', 'question-banks')
  ensureDir(qbDir)
  for (const file of readdirSync(YAML_DIR)) {
    if (file.endsWith('.yaml')) {
      cpSync(join(YAML_DIR, file), join(qbDir, file))
    }
  }

  // 5. Seed demo data
  console.log('  Seeding demo data...')
  ensureDir(join(bundleDir, 'server-data', 'sessions'))
  ensureDir(join(bundleDir, 'server-data', 'responses'))
  // Run seed script pointing at the bundle's data directory
  execSync(`node "${join(APP_DIR, 'scripts', 'seed-demo.mjs')}"`, {
    stdio: 'inherit',
    cwd: APP_DIR,
    env: { ...process.env, DATA_DIR: join(bundleDir, 'server-data'), YAML_DIR },
  })

  // 6. Launcher
  console.log('  Creating launcher...')
  if (platform.launcher === 'start.bat') {
    writeFileSync(join(bundleDir, 'start.bat'), LAUNCHER_BAT, 'utf-8')
  } else if (platform.launcher === 'start.sh') {
    const launcherPath = join(bundleDir, 'start.sh')
    writeFileSync(launcherPath, LAUNCHER_SH, 'utf-8')
    chmodSync(launcherPath, 0o755)
  } else {
    const launcherPath = join(bundleDir, 'start.command')
    writeFileSync(launcherPath, LAUNCHER_COMMAND, 'utf-8')
    chmodSync(launcherPath, 0o755)
  }

  // 7. README
  writeFileSync(join(bundleDir, 'README.txt'), README_TXT, 'utf-8')

  // 8. Create ZIP using Python (more portable)
  console.log('  Creating ZIP archive...')
  const zipName = `craft-explorer-${platform.name}.zip`
  const zipPath = join(OUT_DIR, zipName)
  if (existsSync(zipPath)) rmSync(zipPath)
  const pyZip = `
import zipfile, os
base = "${OUT_DIR.replace(/\\/g, '/')}"
folder = "craft-explorer-${platform.name}"
src = os.path.join(base, folder)
dst = os.path.join(base, "${zipName}")
with zipfile.ZipFile(dst, "w", zipfile.ZIP_DEFLATED) as z:
    for root, dirs, files in os.walk(src):
        for f in files:
            full = os.path.join(root, f)
            arc = os.path.relpath(full, base)
            z.write(full, arc)
`
  execSync(`python3 -c '${pyZip}'`, { stdio: 'pipe' })

  return zipPath
}

// ── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🚀 CRAFT Explorer — Standalone Build\n')
  console.log(`   Node.js version: ${NODE_VERSION}`)
  console.log(`   Platforms: ${PLATFORMS.map((p) => p.name).join(', ')}`)
  console.log(`   Output: ${OUT_DIR}`)

  ensureDir(OUT_DIR)

  // Get Node 22 for building (local Node might be too old for Vite 7)
  console.log('\n🔧 Preparing build tools...')
  const buildNode = ensureBuildNode()

  // Build frontend + server
  buildFrontend(buildNode)
  buildServer()

  // Create platform bundles
  const results = []
  for (const platform of PLATFORMS) {
    const zipPath = createPlatformBundle(platform)
    results.push({ platform: platform.name, zip: zipPath })
  }

  console.log('\n✅ Done! Standalone builds created:\n')
  for (const r of results) {
    const sizeBytes = execSync(`stat -c%s "${r.zip}" 2>/dev/null || stat -f%z "${r.zip}"`, { encoding: 'utf-8' }).trim()
    const sizeMB = (Number(sizeBytes) / 1024 / 1024).toFixed(1)
    console.log(`   ${r.platform}: ${r.zip} (${sizeMB} MB)`)
  }
  console.log('')
}

main().catch((err) => {
  console.error('\n❌ Build failed:', err.message)
  process.exit(1)
})
