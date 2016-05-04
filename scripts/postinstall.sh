#!/bin/sh

./node_modules/fbjs-scripts/node/check-dev-engines.js package.json
./node_modules/.bin/electron-rebuild
