import { Routes,Route } from 'react-router-dom'
import {Inicio,Login,Categoria} from './components';
import {Estudiante} from './pages';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/categoria' element={<Categoria/>}/>
        <Route path='/estudiante' element={<Estudiante/>}/>
      </Routes>

    </div>
  )
}

export default App
