import { useState } from 'react'
import { Link } from "react-router-dom";
import './styles/homepage.css'


function Homepage() {
  return (
    <div className="homepage-text">
      <div>
        <h1>Career Path AI</h1>
        <h2>Your Future Starts Here</h2>
      </div>
      <button>
        <Link to="dashboard">Begin Now</Link>
      </button>
    </div>
  )
}

function App() {
  return (
    <Homepage/>
  )
}

export default App
