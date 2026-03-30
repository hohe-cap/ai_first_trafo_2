#!/bin/bash
# Start CRAFT Explorer in development mode
# Runs frontend (Vite) + backend (Fastify) concurrently
cd "$(dirname "$0")/app" && npm run dev
