import { gql } from "@apollo/client";

const GetBooks = gql`{
    books{
      id
      name
      genre
      author{
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


export { GetBooks, GetAuthors, PostBook, DeleteBook }