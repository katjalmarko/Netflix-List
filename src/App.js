import React from 'react'
import Categories from "./categories"
import Movie from "./components/Movie"
import { useState } from "react"
import allMovies from "./data"
import categories from "./categories"

const App = () => {
  return (
    <div>
      <Categories />
      <Movie />
    </div>
  )
}

export default App
