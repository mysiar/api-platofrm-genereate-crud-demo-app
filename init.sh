#!/usr/bin/env bash
echo '### Update generate-crud from git repository'
git submodule init
git submodule update --remote generate-crud
echo '### Build generate-crud'
cd generate-crud
yarn
yarn build
cd ..
ln -sf generate-crud/lib/index.js ./generate_crud
echo -n '### generate-crud version : '
./generate_crud -V