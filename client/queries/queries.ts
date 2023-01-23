import { gql } from "@apollo/client";

const GetBooks = gql`{
    books{
      id
      name
      genre
      author{
        id
        name
      }
    }
  }`;

const GetBooksByGenre = gql`
  query GetBooksByGenre($genre:String!){
    booksByGenre(genre:$genre){
      id
      name
      author{
        id
        name
      }
    }
  }`;

const GetAuthors = gql`{
    authors{
      id
      name
    }
  }`;


const GetAuthor = gql`
  query GetAuthor($id:ID!){
      author(id:$id){
        name
        id
        books{
          name
          genre
          id
        }
      }
  }`;


const PostBook = gql`
    mutation PostBook($name:String! $genre: String! $authorid: ID! ) {
      addBook(name:$name,genre:$genre,authorid:$authorid){
        name
        id
        genre
      }
    }
  `;

const DeleteBook = gql`
    mutation DeleteBook($id: ID! ) {
      deleteBook(id:$id){
        name
        id
      }
    }
  `;


export { GetBooks, GetAuthors, PostBook, DeleteBook, GetAuthor, GetBooksByGenre }