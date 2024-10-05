import React, { useState } from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const RegisterButton = styled.button`
  background-color: #2c2c2c;
  padding: 15px 0;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-size: 1.2rem;
  
  &:hover {
    scale: unset;
    background-color: #64558f;
    color: white;
  }
`
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  font-size: 1.2rem;
  background-color: white;
  border-radius: 5px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
`

const ReturningUser = styled.a`
  margin: 15px 0px 0px 10px;
  align-self: start;
  color: gray;
  font-size: 1rem;
`


const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <RegisterForm>
      <InfoBox>
        <label htmlFor="">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </InfoBox>
      <InfoBox>
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </InfoBox>
      <InfoBox>
        <label htmlFor="">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </InfoBox>
      <ReturningUser>
        <Link>Returning User?</Link>
      </ReturningUser>
      <RegisterButton type="submit">Register</RegisterButton>
    </RegisterForm>
  );
};

export default Register;
