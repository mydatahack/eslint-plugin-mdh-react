/* eslint-disable */

module.exports = {
  rules: {
    'ban-raw-apollo-use-subscription': require('./eslint-rules/BanRawApolloUseSubscription.js'),
    'ban-parse-float': require('./eslint-rules/BanParseFloat.js'),
    'force-typed-api-requests': require('./eslint-rules/ForceTypedApiRequests.js'),
    'styled-components-naming': require('./eslint-rules/StyledComponentsNaming.js'),
    'prevent-unused-imports': require('./eslint-rules/PreventUnusedImports.js'),
  },
}
