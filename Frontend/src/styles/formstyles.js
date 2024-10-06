import styled from "styled-components"
import { Form, ErrorMessage } from "formik";

const RegisterButton = styled.button`
  background-color: #2c2c2c;
  padding: 15px 0;
  width: 100%;
  border-radius: 5px;
  color: white;
  font-size: clamp(0.75rem, 0.75rem + 0.75vw, 1.25rem);
  margin-top: 10px;

  &:hover {
    scale: unset;
    background-color: #64558f;
    color: white;
  }
  
`
const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px;
  font-size: 1.2rem;
  background-color: white;
  border-radius: 5px;
  width: 90%;
  max-width: 600px;
  margin: auto;


  @media (min-width: 1200px) {
    width: 600px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;
`
const ReturningUser = styled.div`
  margin-left: 10px;
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