import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import axios from "axios";

// Types
import { typeDefs } from "./schema.js";

// db import
import db from "./_db.js";

/* Instances of apollo server
ApolloServer constructor requires two paramaters :  
1. Our Schema defination -> typeDefs
2. Our set of resolvers -> resolvers
*/

// Defining resolver
const resolvers = {
  Query: {
    books() {
      return db.books;
    },
    reviews() {
      return db.reviews;
    },
    games() {
      return db.games;
    },

    authors() {
      return db.authors;
    },

    // posts: async () =>
    //   (await axios.get(`https://jsonplaceholder.typicode.com/posts`)).data,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(` Server starts at : ${url}`);

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//   # This "Book" type defines the queryable fields for every book in our data source.
//   type Post {
//    userId: Int
//    id: Int
//    title: String
//    body: String
//   }

//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Query {
//     posts: [Post]
//   }
// `;
// const books = [
//   {
//     title: "The Awakening",
//     author: "Kate Chopin",
//   },
//   {
//     title: "City of Glass",
//     author: "Paul Auster",
//   },
// ];
