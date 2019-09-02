# minimal react sharepoint

A minimal React starter kit to publish sharepoint apps.

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Microsoft_Office_SharePoint_%282018%E2%80%93present%29.svg" alt="icon" width="25%" height="25%">
</p>

---

Start using React without `create-react-app` and configure webpack, without ejecting.

## Features

* ⚛ React 16
* 🚀 Webpack 4
* 🛠 Babel 7
* 🌈 SASS/SCSS support
* 🔄 Hot Reloading
* 🎨 Linting
* 🐶 Commit Hooks
* ✅ Jest/Enzyme Testing
* ⚡️ Production code optimization
* 🔵 Publish to SharePoint


## Getting started

You have to add a `config.js` script in root.
The content should look like following:

```javascript
module.exports = {
  spUrl: '',
  spSubUrl: '',
  spDir: '',
  spUser: '',
  spPw: '',
};
```

### Installation

```
npm i
```

### Development

```
npm start
```

### Production

```
npm run publish
```

### Test

```
npm run test
# or
npm run test:coverage
```

> Inspired by this [Article](https://medium.com/swlh/setup-a-minimal-react-boilerplate-with-most-features-84f51c7065d6)