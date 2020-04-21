# gatsby-plugin-replace-paths

[![npm][npm-image]][npm-url]

> A Gatsby plugin to replace page paths.

## Installation

### Yarn

```bash
$ yarn add --dev gatsby-plugin-replace-paths
```

### npm

```bash
$ npm install --save-dev gatsby-plugin-replace-paths
```

## Usage

```js
// gatsby-config.js

module.exports = {
  // ...
  plugins: [
    {
      resolve: "gatsby-plugin-replace-paths",
      options: [
        {
          pattern: "/about",
          replacement: "/a-propos",
        },
      ],
    },
  ],
};
```

## Change Log

> [Full Change Log](changelog.md)

### [v1.0.0](https://github.com/wyze/gatsby-plugin-replace-paths/releases/tag/v1.0.0) (2018-05-10)

- [[`2ecb2577b3`](https://github.com/wyze/gatsby-plugin-replace-paths/commit/2ecb2577b3)] - Initial commit (Neil Kistner)

## License

MIT © [Maxime Blanc](//maximeblanc.fr)
Fork of MIT © [Neil Kistner](//neilkistner.com)

[npm-image]: https://img.shields.io/npm/v/gatsby-plugin-replace-path.svg?style=flat-square
[npm-url]: https://npmjs.com/package/gatsby-plugin-replace-path
