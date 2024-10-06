import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom"


const UserText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  color: white;
`

const User = () => {
    const navigate = useNavigate();
    localStorage.removeItem("user");
    
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
        navigate('/login');
    }

    function onSubmit() {
        localStorage.removeItem("user");
        navigate('/login');
    }
  return <>

  <UserText>{user.username}</UserText>
  <button onClick={onSubmit}>Sign Out</button>
  </>;
};


export default User;