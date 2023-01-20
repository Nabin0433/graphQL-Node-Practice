const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schemas/schemas')
const app = express();
const cors = require('cors')

require('./database')

app.use(cors())

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(4000, () => {
  console.log('server started on port 4000');
})