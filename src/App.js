import React from 'react'
import Categories from "./components/categories"
import Movie from "./components/Movie"
import OneMovieSlider from './components/OneMovieSlider'

const App = () => {
  return (
    <div>
      <div className='slider'>
      <OneMovieSlider />
      </div>
      <Categories />
      <Movie />
    </div>
  )
}

export default App
