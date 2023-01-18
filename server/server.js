const express = require('express');
const app = express();
app.listen(5000., () => console.log('server running'));
const expressGraphQl = require('express-graphql').graphqlHTTP;

app.use('/graphql', expressGraphQl ({
    graphiql: true

}));