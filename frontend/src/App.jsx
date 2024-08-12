import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import DeleteItem from './pages/DeleteItem';
import EditItem from './pages/EditItem';
import ShowItem from './pages/ShowItem';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/items/create' element={<CreateItem/>} />
      <Route path='/items/delete/:id' element={<DeleteItem/>} />
      <Route path='/items/edit/:id' element={<EditItem/>} />
      <Route path='/items/details/:id' element={<ShowItem/>} />
    </Routes>
  )
}

export default App