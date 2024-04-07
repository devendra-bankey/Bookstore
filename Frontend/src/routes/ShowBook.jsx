import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { BackButton } from '../components/BackButton'
import { Spinner } from '../components/Spinner'




export const ShowBook = () => {
    const [book, setBook] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:4500/books/${id}')
            .then((res) => {
                setBook(res.data)
                setLoading(false)
            })
            .catch(() => {
                console.log(error)
            })
    }, [])
    return (
        <div>ShowBook</div>
    )
}
