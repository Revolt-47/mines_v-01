import './index.css';
import Form from './form.js'
import Login from './login';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App(props) {

  const [res,setres] = useState(null);

  const callapi = () =>{
    fetch('http://localhost:9000/index.js')
    .then(res => res.text)
    .then (res => setres(res));
  }

  function componentWillMount(){
   callapi();
  }

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
