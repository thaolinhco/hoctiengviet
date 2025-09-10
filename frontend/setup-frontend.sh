#!/bin/bash
# Setup script for frontend (React + Vite)

cd "$(dirname "$0")"

echo "Installing frontend dependencies with Yarn..."
yarn install

echo "Starting Vite development server..."
yarn dev
