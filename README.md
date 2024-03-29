# eslint-config-timetree

[![npm version](https://badge.fury.io/js/eslint-config-timetree.svg)](https://badge.fury.io/js/eslint-config-timetree)


A sharable ESLint config for TimeTree.
This is intended to use at a project for React + TypeScript + Prettier.

## Install

```sh
npm i --save-dev eslint prettier typescript react // install peerDependencies
npm i --save-dev eslint-config-timetree

yarn add --dev eslint prettier typescript react // install peerDependencies
yarn add --dev eslint-config-timetree
```

## How to use

Add a following `.eslintrc.js` in your project.

```js
module.exports = {
  extends: ["timetree"]
}
```

or

```js
module.exports = {
  extends: ["timetree/react"]
}
```

If your project is not React based, you can use base config.

```js
module.exports = {
  extends: ["timetree/base"]
}
```

Run `eslint`!

```sh
npx eslint src
```

If you want to lint TypeScript files including `.tsx`, you can use `--ext` option ESLint has.

```sh
npx eslint --ext .ts,.tsx src
```
