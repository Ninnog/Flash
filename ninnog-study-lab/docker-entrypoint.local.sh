#!/bin/sh
set -e

echo "[entrypoint] Running database migrations..."
npx drizzle-kit generate
npx drizzle-kit migrate
echo "[entrypoint] Migrations done."

echo "[entrypoint] Starting server..."
exec node dist/index.js
