import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import TodoForm from './components/Todo-Task/Todo-Form/TodoForm'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<TodoForm/>} />
      </Routes>
    </div>
  )
}

export default App