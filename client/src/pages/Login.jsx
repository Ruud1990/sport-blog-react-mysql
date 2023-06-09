import React from 'react';
import {useState, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div className='login'>
      <h1>Login</h1>
      <form>
        <input required type='text' placeholder='username' name='username' onChange={handleChange}></input>
        <input required type='password' placeholder='password' name='password' onChange={handleChange}></input>
        <button onClick={handleSubmit}>Login</button>
        {error &&<p>{error}</p>}
        <span>Don't you have an account? <Link to='/register'>Register</Link></span>
      </form>
    </div>
  )
}

export default Login