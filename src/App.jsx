import { Link } from "react-router-dom";
import './styles/homepage.css'


function Homepage() {
  return (
    <div className="homepage-text">
      <div>
        <h1>Career Path AI</h1>
        <h2>Your Future Starts Here</h2>
      </div>
      <Link to="dashboard">
        <button>Begin Now</button>
      </Link>
    </div>
  )
}

function App() {
  return (
    <Homepage/>
  )
}

export default App
