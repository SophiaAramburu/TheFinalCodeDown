const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

//Apollo Server for gql
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const statusRoutes = require("./routes/userPost");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const expressGraphQl = require("express-graphql").graphqlHTTP;

app.use(
  "/graphql",
  expressGraphQl({
    graphiql: true,
  })
);

//Route to index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.use("/api/status", statusRoutes);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
