import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const axios = require('axios').default;
export default function Form(){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === ''  || password === '') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      nav();
      postData('http://localhost:5000/api' , "salman");
    }
  };

    async function postData(url = '', data) {

      axios.get('http://localhost:5000/api').then((response) => {
        console.log(response.data);
      });
  // Default options are marked with *
  axios({
    method: 'post',
    
    url: 'http://localhost:5000/api',
    data: {
      name: 'Fred',
      lastName: 'Flintstone'
    }
  });
}


  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const nav = () => {
    navigate("/login")
  }

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        {/* Labels and inputs for form data */}
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" />
        <br></br>
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" />
        <br></br>
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>

        <button onClick={nav} className="btn">
          Go to login page
        </button>
      </form>
    </div>
  );
}
