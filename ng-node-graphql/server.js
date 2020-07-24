const express = require('express'),
      graphql = require('express-graphql'),
      schema = require('./schema')
      app = express();

app.use('/graphql', graphql({
    schema: schema,
    graphiql: true,
}))

app.listen(3000)