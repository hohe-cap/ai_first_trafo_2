FROM node:22-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY app/package.json app/package-lock.json ./
RUN npm ci

# Copy app source
COPY app/ ./

# Copy question bank YAMLs
COPY deliverables/question_banks/*.yaml /tmp/yamls/

# Copy YAMLs to both locations (frontend build + server runtime)
RUN mkdir -p public/data && cp /tmp/yamls/*.yaml public/data/
RUN mkdir -p server-data/question-banks && cp /tmp/yamls/*.yaml server-data/question-banks/

# Build the Vue frontend
RUN npx vue-tsc -b && npx vite build

# Build the server (compile TS to JS with esbuild)
RUN npx esbuild server/index.ts --bundle --platform=node --format=esm --outfile=server-dist/index.mjs --packages=external

# --- Production stage ---
FROM node:22-alpine

RUN apk add --no-cache curl

WORKDIR /app

# Copy package files and install production dependencies only
COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

# Copy built frontend
COPY --from=build /app/dist ./dist

# Copy compiled server
COPY --from=build /app/server-dist ./server-dist

# Copy question bank YAMLs for the server
COPY --from=build /app/server-data ./server-data

ENV NODE_ENV=production
ENV DATA_DIR=/app/server-data
ENV PORT=3000
ENV HOST=0.0.0.0
# Set ADMIN_SECRET at runtime to protect facilitator area (empty = no protection)
ENV ADMIN_SECRET=

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

CMD ["node", "server-dist/index.mjs"]
