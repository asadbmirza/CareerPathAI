import { ImgCaption } from "../styles/mainpage"

const ImageCard = ({ imgPath, caption }) => {
  return (
    <ImgCaption>
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png" 
        alt="placeholder" 
        loading="lazy" 
        style={{ maxWidth: '100%', maxHeight: '100%', display: 'block' }}
      />
      <span className="caption">Placeholder text</span>
    </ImgCaption>
  )
}

export default ImageCard