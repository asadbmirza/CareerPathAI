import ImageCard from "./ImageCard"
import { SuggestionCardStyle } from "../styles/mainpage"
import CardText from "./CardText"


const SuggestionCard = ( { title, description, skills, imgPath, caption } ) => {
 return (
   <SuggestionCardStyle>
     <CardText title={title} description={description} skills={skills}></CardText>
     <ImageCard imgPath={imgPath} caption={caption} ></ImageCard>
   </SuggestionCardStyle>
 )
}


export default SuggestionCard