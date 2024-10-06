import ImageCard from "./ImageCard"
import { SuggestionCardStyle } from "../styles/mainpage"
import CardText from "./CardText"

const SuggestionCard = ( { title, description, skills } ) => {
  return (
    <SuggestionCardStyle>
      <CardText title={title} description={description} skills={skills}></CardText>
      <ImageCard></ImageCard>
    </SuggestionCardStyle>
  )
}

export default SuggestionCard 