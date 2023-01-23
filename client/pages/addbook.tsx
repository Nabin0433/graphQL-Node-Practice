import { GetAuthors, GetBooks, PostBook } from '@/queries/queries';
import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react'

const addbook = () => {
  const { loading, data } = useQuery(GetAuthors);
  const [addBook] = useMutation(PostBook);
  const router = useRouter()

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit');
    const target = e.target as typeof e.target & {
      name: { value: string };
      genre: { value: string };
      author: { value: string };
    };
    addBook({
      variables: { name: target.name.value, genre: target.genre.value, authorid: target.author.value }, refetchQueries: [
        {
          query: GetBooks,
        },
        'books'
      ]
    })
    router.push('/')
  }

  return (
    <div>
      <h4 className='text-center py-4'>Add books</h4>
      <hr />

      <div className='mt-8'>
        <form className='flex flex-col space-y-2 px-20' onSubmit={(submit)}>
          <label htmlFor="name">Name</label>
          <input className='border h-10 rounded-lg pl-4' type="text" name='name' id='name' />
          <label htmlFor="genre">Genre</label>
          <input className='border h-10 rounded-lg pl-4' type="text" name='genre' id='genre' />
          <label htmlFor="author">Choose Author</label>
          <select className='border h-12 px-4' name="author" id="author">
            <option className='text-gray-300' hidden value="">{loading ? 'Loading...' : 'Choose Authors'}</option>
            {data?.authors?.map((item: any) => (<option key={item?.id} value={item?.id}>{item.name}</option>))}
          </select>
          <br />
          <button className='py-2 border'>Submit</button>

        </form>
      </div>


    </div>
  )
}

export default addbook