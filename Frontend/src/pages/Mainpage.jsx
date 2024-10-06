import { HeaderText } from "../styles/mainpage"
import SuggestionCard from "../components/SuggestionCard"
import { RegisterButton } from "../styles/formstyles"
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Mainpage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        console.log(loading);
        const response = await axios.get('http://localhost:3000/responses', {
          withCredentials: true
        });
        console.log(`Data fetched successfully: ${JSON.stringify(response.data)}`);
        setData(response.data)
        setLoading(false);
        
      } 
      catch (error) {
        setError('An error occurred while fetching data'); // Handle error
        setLoading(false); // Stop loading on error
      }
    };
    
    fetchData();
  }, []);
  if (loading) {
    return <HeaderText>Loading...</HeaderText>
  }

  if (error) {
    return  <HeaderText>{error}...</HeaderText>;
  }

  return (
    <main>
      <HeaderText>Based on your information these are potential steps you can take...</HeaderText>
      <SuggestionCard title="First, check this out..." description={data[0].step} skills={data[0].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Get involved in the community..." description={data[1].step} skills={data[1].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Connect, contribute, and grow..." description={data[2].step} skills={data[2].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Kick things off with confidence..." description={data[3].step} skills={data[3].requiredSkills}></SuggestionCard>
      <SuggestionCard title="Discover what's next for you..." description={data[4].step} skills={data[4].requiredSkills}></SuggestionCard>
      <RegisterButton>Generate Another Career Path</RegisterButton>
      <RegisterButton onClick={() => {navigate("/details")}}>Edit Skills and Interests</RegisterButton>
    </main>
  )
}

export default Mainpage;