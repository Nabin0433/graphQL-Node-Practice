const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList } = require('graphql');
const Book = require('../models/book.model');
const Author = require('../models/author.model');

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      async resolve(parent, args) {
        const author = await Author.findOne({ _id: parent.authorid })
        return author;
      }
    },
  })
});

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      async resolve(parent, args) {
        const books = await Book.find({ authorid: parent.id })
        return books;
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    books: {
      type: new GraphQLList(BookType),
      async resolve() {
        const books = await Book.find()
        return books;
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const book = await Book.findOne({ _id: args.id })
        return book;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      async resolve() {
        const authors = await Author.find()
        return authors;
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      async resolve(parent, args) {
        const author = await Author.findOne({ _id: args.id });
        return author;
      }
    }
  }
})


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
      },
      async resolve(parent, args) {
        const author = new Author({
          name: args.name,
          age: args.age,
        });
        await author.save()
        return author;
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        authorid: { type: GraphQLID },
      },
      async resolve(parent, args) {
        const book = new Book({
          name: args.name,
          genre: args.genre,
          authorid: args.authorid,
        });
        await book.save()
        return book;
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
})