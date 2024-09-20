import { Route, Routes } from 'react-router-dom'
import Gener from './pages/Gener'
import Books from './pages/Books'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Gener/>}/>
      <Route path='/books/:page' element={<Books/>}/>
    </Routes>
  )
}

export default App
