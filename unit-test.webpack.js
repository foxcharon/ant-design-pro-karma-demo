// All test case naming follow /-test\.js$/ regexp pattern.
const context = require.context('./src', true, /\.my\.test\.js$/)
context.keys().forEach(context)