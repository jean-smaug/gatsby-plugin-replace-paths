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
      options: {
        config: [
          {
            pattern: "/about",
            replacement: "/a-propos",
          },
          {
            pattern: /(e)/g,
            replacement: (_, match) => match.toUpperCase(),
          },
        ],
      },
    },
  ],
};
```

## License

MIT © [Maxime Blanc](//maximeblanc.fr)
Fork of [Neil Kistner](https://github.com/wyze/gatsby-plugin-replace-path)

[npm-image]: https://img.shields.io/npm/v/gatsby-plugin-replace-path.svg?style=flat-square
[npm-url]: https://npmjs.com/package/gatsby-plugin-replace-paths
