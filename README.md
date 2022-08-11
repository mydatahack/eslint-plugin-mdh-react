# eslint-plugin-mdh-react

You can use this plugin the same way as others do by updating `.eslintrc.js`.

```js
module.exports = {
  ...
  plugins: [
    ...,
    'eslint-plugin-mdh-react',
  ]
  rules: {
    'eslint-plugin-mdh-react/ban-parse-float': 2,
    'eslint-plugin-mdh-react/force-typed-api-requests': 2,
    'eslint-plugin-mdh-react/ban-raw-apollo-use-subscription': 2,
    'eslint-plugin-mdh-react/styled-components-naming': 2,
    ...
  }
}
```
