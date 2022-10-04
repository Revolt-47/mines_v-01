import './index.css';
import Form from './form.js'
import Login from './login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>  
   </BrowserRouter>  
  );
}

export default App;
