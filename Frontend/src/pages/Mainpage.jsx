import { HeaderText } from "../styles/mainpage"
import SuggestionCard from "../components/SuggestionCard"
import { RegisterButton } from "../styles/formstyles"
import { Navigate } from "react-router-dom"
import { useEffect } from "react";
import { useState } from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const Mainpage = () => {
  const [edit, setEdit] = useState(false);
  const data = JSON.parse(localStorage.getItem('data'));
  if (edit) {
    return <Navigate to="/details" />
  }

  return (
    <main>
      <HeaderText>Based on your information these are potential steps you can take...</HeaderText>
      <SuggestionCard title="Step One" description={data[0].step} skills={data[0].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Step Two" description={data[1].step} skills={data[1].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Step Three" description={data[2].step} skills={data[2].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Step Four" description={data[3].step} skills={data[3].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Step Five" description={data[4].step} skills={data[4].requiredSkills}></SuggestionCard>
      <RegisterButton>Generate Another Career Path</RegisterButton>
      <RegisterButton onClick={() => setEdit(true)}>Edit Skills and Interests</RegisterButton>
    </main>
  )
}

export default Mainpage;