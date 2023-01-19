const express = require('express');
//Apollo Server for gql
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');65enjhr44jd

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expressGraphQl = require('express-graphql').graphqlHTTP;

app.use('/graphql', expressGraphQl ({
    graphiql: true

}));

//Route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/public/index.html'))
});

//Need route for homepage
//Need route for login page
//Need route for signup page
//Need route for signed in homepage/profile info
//Need route for blog page
//Need route for friend list page
//Need route for map page
//Need a route for signed out 



app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`)
);
