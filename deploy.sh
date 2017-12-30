#!/bin/bash
rm -rf dist || exit 0;
mkdir dist;
webpack --config webpack.config.js NODE_ENV=production --progress --profile --colors || exit 0;
( cd dist
 git init
 git config user.name "arsenicum32"
 git config user.email "zombiehot@yandex.ru"
 cp ../CNAME ./CNAME
 cp ../index.html ./index.html
 git checkout -b gh-pages
 git add .
 git commit -m "Deployed to Github Pages"
 git remote add origin https://github.com/arsenicum32/lila.git
 git push --force -u origin gh-pages
 cd ..
 rm -rf dist/
)
