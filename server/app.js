const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/schemas')
const app = express();

require('./database')

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(4000, () => {
  console.log('server started on port 4000');
})