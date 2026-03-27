export const typeDefs = `#graphql

  type Book {
    id: ID!
    title: String!
    author: String!
    genre: [String!]!  
  }

  type Game {
    id: ID!
    title: String!
    platform: [String!]!
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }




# Query --> This is reqired 
# it is to define th entry points 
  type Query {
    books: [Book]
    reviews: [Review]
    games: [Game]
    authors: [Author]


  }

`;

// int, float, string, boolean, ID
// [String] => for multiple values
// ! -> Required value
