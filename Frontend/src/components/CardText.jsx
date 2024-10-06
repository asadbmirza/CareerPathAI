import { CardTextStyle } from "../styles/mainpage"

const CardText = ({ title, description, skills }) => {
  return (
    <CardTextStyle>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        <span>Skills Learned:</span>
        {skills.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))
        }
      </ul>
    </CardTextStyle>
  )
}

export default CardText