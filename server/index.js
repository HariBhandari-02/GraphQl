import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import axios from "axios";

const app = express();

//CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  }),
);

//  Body parser (built-in)
app.use(express.json());

//  GraphQL schema
const typeDefs = `
  type Todo {
  id: ID!
  title: String!
  completed: Boolean
  }

  type Query {  
  getAllTodos: [Todo]
  }
`;

//  Resolvers
const resolvers = {
  Query: {
    getAllTodos: async () =>
      (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
  },
};

//  Apollo Server
// ! -> Required field
// If we have to get any data from server then we use -> Query
// If we have to send/input any data to server/database we use -> Mutation
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

//  Start server
async function startServer() {
  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(5000, () => {
    console.log("Server ready at http://localhost:5000/graphql");
  });
}

startServer();
