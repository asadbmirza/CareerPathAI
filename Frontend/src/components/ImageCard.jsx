import { ImgCaption } from "../styles/mainpage"


const ImageCard = ({ imgPath, caption }) => {
 return (
   <ImgCaption>
     <img
       src={imgPath}
       alt="placeholder"
       loading="lazy"
       style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
     />
   </ImgCaption>
 )
}


export default ImageCard;
