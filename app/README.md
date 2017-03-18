# Cercemap App
Mapping application for Cercedilla Points of Interests

## Install
```
npm install
```

## Local development
* Local server
```
npm start
```

* Webpack build
```
npm run-script build
```

* Webpack build with watch
```
npm run-script build-watch
```

## Build releases
version is bumped into **package.json**

* Build a dist with bump of version
```
npm run-script dist-major
npm run-script dist-minor
npm run-script dist-patch
-----------
cd app
npm version major/minor/patch
NODE_ENV=production webpack -p --config ./webpack.production.config.js
cd ..
git tag vX.X.X
git add .
git commit -m 'XXXX'
git push origin master

```
* Run local server in dist folder
```
npm run-script start-dist
```
* Don't forget git tag after making a release
```
git tag vX.X.X
```
and git commit and push to origin



## Unit tests
* Run tests
```
npm test
```
