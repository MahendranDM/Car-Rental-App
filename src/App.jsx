import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddCar from './components/AddCar'
import ViewCars from './components/ViewCars'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BrowserRouter>
<Routes>


<Route path='/add-car' element={<AddCar/>}/>
<Route path='/' element={<ViewCars/>}/>


</Routes>



</BrowserRouter>
    </>
  )
}

export default App
