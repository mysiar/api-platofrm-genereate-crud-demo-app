#!/usr/bin/env bash

echo "### Generating React API Platform components"
node ./generate_crud https://api-2.0.geomysiar.pl ./build/

echo "### Cleaning up public_html"
rm -rf public_html/static

mkdir -p tmp
echo "### Creating App skeleton"
cp -R skeleton/* tmp/
echo "### Copying React components to App skeleton"
cp -R build/* tmp/src/
cd tmp
echo "### Building React App"
yarn && yarn build
cp -R build/* ../public_html/
cd ..
echo "### Done :)"
echo "### Static React App files in public_html"
