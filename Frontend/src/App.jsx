import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Root from './routes/Root'
import { CreateBooks } from './routes/CreateBooks'
import { DeleteBook } from './routes/DeleteBook'
import { EditBook } from './routes/EditBook'
import { ShowBook } from './routes/ShowBook'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/books/create' element={<CreateBooks />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/details/:id ' element={<ShowBook />} />
    </Routes>
  )
}

export default App
