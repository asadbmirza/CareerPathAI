import { HeaderText } from "../styles/mainpage"
import SuggestionCard from "../components/SuggestionCard"
import { RegisterButton } from "../styles/formstyles"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';

const Mainpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.data || {};

  return (
    <main>
      <HeaderText>Based on your information these are potential steps you can take...</HeaderText>
      <SuggestionCard title="First, check out this course..." description={data[0].step} skills={data[0].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Get involved in the community..." description={data[1].step} skills={data[1].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Connect, contribute, and grow..." description={data[2].step} skills={data[2].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Kick things off with confidence..." description={data[3].step} skills={data[3].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Discover what's next for you..." description={data[4].step} skills={data[4].requiredSkills}></SuggestionCard>
      <RegisterButton>Generate Another Career Path</RegisterButton>
      <RegisterButton onClick={() => {navigate("/details")}}>Edit Skills and Interests</RegisterButton>
    </main>
  )
}

export default Mainpage