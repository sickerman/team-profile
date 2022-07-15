import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

// Components
import Header from "./components/Header"
import CardList from "./components/CardList"


//App
function App() {

  return (
    <div className="App">
     <Header/>
     <CardList/>
    </div>
  )
}

export default App
