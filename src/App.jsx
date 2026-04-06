import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Category from './pages/Category'
import Best from './pages/Best'
import About from './pages/About'
import Layout from './pages/Layout'
import CategoryDetail from './pages/CategoryDetail'
import MovieInfo from './pages/MovieInfo'


function App() {
  const [count, setCount] =useState(0)
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category" element={<Category />}></Route>
          <Route path="/category/:id" element={<CategoryDetail />}></Route>
          <Route path="/best" element={<Best />}></Route>
          <Route path="/movie/:movieId" element={<MovieInfo />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
