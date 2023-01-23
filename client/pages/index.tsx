import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GetBooks, DeleteBook } from '../queries/queries'
import { FiDelete } from "react-icons/fi";
import React from 'react'


const index = () => {
  const { loading, error, data } = useQuery(GetBooks);
  const [deleteBook] = useMutation(DeleteBook);
  const router = useRouter()

  const deleteBookById = (id: string) => {
    deleteBook({
      variables: { id: id }, refetchQueries: [
        {
          query: GetBooks,
        },
        'books'
      ]
    })
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className=''>
      <h2 className='text-center py-4'>GraphQl</h2>
      <hr />
      <div className='flex justify-center items-center mt-8'>
        <button className='text-center py-2 px-8 border border-gray-300' onClick={() => router.push('/addbook')}>Add new book</button>
      </div>
      <div className='mb-20' />
      <div className='flex pb-4 border-b'>
        <h6 className='w-80'>Books List</h6>
        <h6 className='w-60'>Genre</h6>
        <h6 className='w-60'>Author</h6>
      </div>
      <br />
      <div className='space-y-3'>
        {data?.books?.map((item: any) => (
          <div key={item?.id} className='flex'>
            <li className='w-80 capitalize'>{item.name}</li>
            <p className='w-60 capitalize'>{item?.genre}</p>
            <p className='w-60 capitalize'>{item?.author?.name}</p>
            <p className='text-red-400 hover:text-red-800 cursor-pointer' onClick={() => deleteBookById(item?.id)}><FiDelete size={20} /></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default index