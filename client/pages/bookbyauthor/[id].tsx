import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GetBooks, DeleteBook, GetAuthor } from '../../queries/queries'
import { FiDelete } from "react-icons/fi";
import React, { useEffect } from 'react'
import Loading from '@/components/Loading';
import Error from '@/components/Error';

const Bookbyauthor = () => {
    const router = useRouter()
    const { id } = router.query;
    const { loading, error, data, refetch } = useQuery(GetAuthor, { variables: { id: id } });
    const [deleteBook] = useMutation(DeleteBook);

    useEffect(() => {
        if (id) {
            refetch()
        }
    }, [id])

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

    if (loading) return <Loading />;
    if (error) return <Error />;

    return (
        <div className=''>
            <h2 className='text-center py-4 capitalize'>Books by author : {data?.author?.name} </h2>
            <hr />
            <div className='flex justify-center items-center mt-8'>
            </div>
            <div className='mb-20' />
            <div className='flex pb-4 border-b'>
                <h6 className='w-80'>Books List</h6>
                <h6 className='w-60'>Genre</h6>
            </div>
            <br />
            <div className='space-y-3'>
                {data?.author?.books?.map((item: any) => (
                    <div key={item?.id} className='flex'>
                        <li className='w-80 capitalize'>{item.name}</li>
                        <p className='w-60 capitalize cursor-pointer hover:text-blue-500 hover:underline' onClick={() => router.push(`/bookbygenre/${item?.genre}`)}>{item?.genre}</p>
                        <p className='text-red-400 hover:text-red-800 cursor-pointer' onClick={() => deleteBookById(item?.id)}><FiDelete size={20} /></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Bookbyauthor