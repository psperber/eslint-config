# @psperber/eslint-config

[![npm-badge]][npm]
[![downloads-badge]][npm]

[npm-badge]: https://img.shields.io/npm/v/@psperber/eslint-config.svg?style=flat-square
[npm]: https://www.npmjs.com/package/@psperber/eslint-config
[downloads-badge]: https://img.shields.io/npm/dt/@psperber/eslint-config.svg?style=flat-square

This package provides my personal eslint config.
It is based on the recommended configuration provided by eslint
and enriched with the `eslint-plugin-import` plugin and some rules I prefer over the recommended config.

## Usage

1. Install [eslint](https://eslint.org) and this package
```sh
npm install --save-dev eslint @psperber/eslint-config
```
2. Add `"extends": "@psperber/eslint-config"` to your `.eslintrc`