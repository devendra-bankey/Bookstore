import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios"
import { Spinner } from "../components/Spinner";
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



export default function Root() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true)
        axios.get('http://localhost:4500/books')
            .then((res) => {
                setBooks(res.data);
                console.log(res.data)
                setLoading(false)

            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    return (
        <>
            <div id="sidebar">
                {/* Sidebar content */}
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center flex-col">
                    <h1 className="text-3xl my-8">Book List</h1>
                    <Link to='/books/create'></Link>
                    <div className="book-container">
                        {loading ? (<Spinner />) : (

                            <table className="w-full border-separate border-spacing-2">
                                <thead>
                                    <tr>
                                        <th className="border border-slate-600 rounded-md">No</th>
                                        <th className="border border-slate-600 rounded-md">Title</th>
                                        <th className="border border-slate-600 rounded-md max-mx:hidden">Author</th>
                                        <th className="border border-slate-600 rounded-md">publishYear</th>
                                        <th className="border border-slate-600 rounded-md">Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {books && books.map((book, index) => (
                                        <tr key={book._id} className="h-8">
                                            <td className="border border-slate-700 rounded-md text-center">
                                                {index + 1}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center">
                                                {book.title}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center">
                                                {book.author}
                                            </td>
                                            <td className="border border-slate-700 rounded-md text-center">
                                                {book.publishYear}
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>


                        )}


                    </div>

                    <p></p>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
            <div id="sidebar">
                {/* Sidebar content */}
            </div>
        </>
    );
}


