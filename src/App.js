import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import TodoForm from './components/Todo-Task/Todo-Form/TodoForm'
import ParentHook from './components/hooks/ParentHook'
import UseStateHook from './components/hooks/UseStateHook'
import UseTransition from './components/hooks/UseTransition'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<TodoForm/>} />
        <Route path='/hooks' element={<ParentHook />}>
        <Route path='useState' element={<UseStateHook />}/>
        <Route path='useEffect' element={<ParentHook />} />
        <Route path='useReducer' element={<ParentHook />} />
        <Route path='useMemo' element={<ParentHook />} />
        <Route path='useCallback' element={<ParentHook />} />
        <Route path='useRef' element={<ParentHook />} />
        <Route path='useTransition' element={<UseTransition />} />
        <Route path='useDefferedValue' element={<ParentHook />} />
        <Route path='useParams' element={<ParentHook />} />
        <Route path='useLocation' element={<ParentHook />} />
        <Route path='use' element={<ParentHook />} />
        <Route path='CustomHook' element={<ParentHook />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App