import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import DigiWikiPage from './pages/DigiWikiPage/DigiWikiPage'
import DigimonInfoPage from './pages/DigimonInfoPage/DigimonInfoPage'

function App() {
  const [theme, settheme] = useState("white")

  return (
    <Routes>
      <Route path='/' element={<HomePage theme ={theme}/>}/>
      <Route path='/digiwiki' element={<DigiWikiPage/>}/>
      <Route path='/digimonInfo/:id' element={<DigimonInfoPage/>}/>
    </Routes>
  )
}

export default App
