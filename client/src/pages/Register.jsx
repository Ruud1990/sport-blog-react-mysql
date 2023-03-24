import React from 'react';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className='login'>
      <h1>Register</h1>
      <form>
        <input required type='text' placeholder='username'></input>
        <input required type='email' placeholder='email'></input>
        <input required type='text' placeholder='password'></input>
        <button>Register</button>
        <p>This is an error!</p>
        <span>Do you have an account? <Link to='/login'>Login</Link></span>
      </form>
    </div>
  )
}

export default Register