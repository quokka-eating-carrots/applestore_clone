import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clayful from 'clayful/client-js'

function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let Customer = clayful.Customer;

    let payload = {
      email,
      password
    }

    Customer.createMe(payload, function (err, result) {
      if (err) {
        console.log(err.code)
        return;
      }

      let data = result.data
      console.log(data)
      navigate('/login')
    })
  }

  return (
    <div className='pageWrapper'>
      <div className = 'auth-wrapper'>
        <h1>회원가입</h1>

        <form onSubmit={handleSubmit}>
          <input
          onChange = {handleEmailChange}
          placeholder = 'Apple ID'
          type = 'email'
          name = 'email'
          value = {email} />

          <input
          onChange = {handlePasswordChange}
          type = 'password'
          placeholder = '암호'
          name = 'password'
          value = {password} />

          <button type='submit'>회원가입</button>
          <Link to='login' style = {{ color: 'gray', textDecoration: 'none' }}>
            {' '}
            이미 Apple ID가 있다면? 지금 로그인</Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
