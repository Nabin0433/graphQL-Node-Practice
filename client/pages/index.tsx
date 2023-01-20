import { gql, useQuery } from '@apollo/client';
import React from 'react'


const GetBooks = gql`{
  books{
    name
  }
}`;

const index = () => {
  const { loading, error, data } = useQuery(GetBooks);


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      {data?.books?.map((itam: any) => (
        <div>
          <h1>{itam.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default index