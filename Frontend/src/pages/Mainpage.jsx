import { HeaderText } from "../styles/mainpage"
import SuggestionCard from "../components/SuggestionCard"

const Mainpage = () => {
  return (
    <main>
      <HeaderText>Based on your information these are potential steps you can take...</HeaderText>
      <SuggestionCard></SuggestionCard>
    </main>
  )
}

export default Mainpage