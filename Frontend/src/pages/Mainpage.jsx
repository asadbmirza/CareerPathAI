import { HeaderText } from "../styles/mainpage"
import SuggestionCard from "../components/SuggestionCard"
import { RegisterButton } from "../styles/formstyles"
import { useNavigate } from "react-router-dom"


const Mainpage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <HeaderText>Based on your information these are potential steps you can take...</HeaderText>
      <SuggestionCard title="First, check out this course..." description="12323 candidates in a similar position took this step" skills={["why", "do", "re", "me", ]}></SuggestionCard>
      <SuggestionCard title="Get involved in the community..." description="bye" skills={["why"]}></SuggestionCard>
      <SuggestionCard title="Connect, contribute, and grow..." description="bye" skills={["why"]}></SuggestionCard>
      <SuggestionCard title="Kick things off with confidence..." description="bye" skills={["why"]}></SuggestionCard>
      <SuggestionCard title="Discover what's next for you..." description="bye" skills={["why"]}></SuggestionCard>
      <RegisterButton>Generate Another Career Path</RegisterButton>
      <RegisterButton onClick={() => {navigate("/details")}}>Edit Skills and Interests</RegisterButton>
    </main>
  )
}

export default Mainpage