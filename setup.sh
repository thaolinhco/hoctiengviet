#!/bin/bash
# Setup script for hoctiengviet project


# Always install a specific Yarn version (4.9.4) using corepack
YARN_VERSION=4.9.4
echo "Enabling corepack and preparing Yarn version $YARN_VERSION..."
corepack enable
corepack prepare yarn@$YARN_VERSION --activate

# (Optional) Install backend dependencies
# cd backend
# pip install -r requirements.txt
# cd ..


# Run frontend setup script
cd frontend
./setup-frontend.sh
cd ..

echo "Setup complete."
