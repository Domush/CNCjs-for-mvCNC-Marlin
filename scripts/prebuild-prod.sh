#!/bin/bash

mkdir -p dist
rm -rf dist/*

pushd src
mkdir -p ../dist/cncjs4marlin/
cp -af package.json ../dist/cncjs4marlin/
cross-env NODE_ENV=production babel "*.js" \
    --config-file ../babel.config.js \
    --out-dir ../dist/cncjs4marlin
cross-env NODE_ENV=production babel "electron-app/**/*.js" \
    --config-file ../babel.config.js \
    --out-dir ../dist/cncjs4marlin/electron-app
popd
