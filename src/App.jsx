import { Routes,Route } from 'react-router-dom'
import {Inicio,Login,Categoria} from './components';
import {Estudiante} from './pages';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/Vive-Colegio/' element={<Inicio/>}/>
        <Route path='/Vive-Colegio/login' element={<Login/>}/>
        <Route path='/Vive-Colegio/categoria' element={<Categoria/>}/>
        <Route path='/Vive-Colegio/estudiante' element={<Estudiante/>}/>
      </Routes>

    </div>
  )
}

export default App
