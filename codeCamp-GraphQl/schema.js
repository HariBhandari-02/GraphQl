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
    book(id: ID!): Book

    reviews: [Review]
    review(id: ID!): Review

    games: [Game]
    game(id: ID!): Game
    
    authors: [Author] 
    author(id: ID!): Author
  }

`;

// int, float, string, boolean, ID
// [String] => for multiple values
// ! -> Required value
