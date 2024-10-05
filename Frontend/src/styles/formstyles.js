import styled from "styled-components"
import { Form, ErrorMessage } from "formik";


const HeaderText = styled.h1 `
  color: white;
  width: 600px;
  text-align: center;
  margin-bottom: 25px;
`

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
const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 600px;
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
const ReturningUser = styled.div`
  margin: 15px 0px 0px 10px;
  align-self: start;
  color: gray;
  font-size: 1rem;

  &: hover {
    text-decoration: underline;
  }
`
const ErrorText = styled(ErrorMessage)`
  font-size: 0.8rem;
  margin: 5px;
  color: red;
`

export { RegisterButton, RegisterForm, InfoBox, ReturningUser, ErrorText }