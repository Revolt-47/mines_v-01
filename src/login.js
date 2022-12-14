
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Login(){

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
    }
  };

  function nav(){
    navigate("/")
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
    )}

    return(

        <div className="messages">
        {errorMessage()}
        {successMessage()}      
            <h1>Enter your Credentials</h1>
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

        <button onClick={nav} className="btn" >
          Create a new account
        </button>

        
      </form>
        </div>
    )
    
}