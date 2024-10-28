import { Navigate, Outlet, useLocation } from "react-router-dom";
import { HeaderText } from "../styles/mainpage";
import axios from "axios";
import { useEffect, useState } from "react";

const ProtectedPage = () => {
  const token = localStorage.getItem("token");
  const [skills, setSkills] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (!token) {
    return <Navigate to="/login" />;
  }

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    const path = location.pathname === "/details" ? "/skills" : location.pathname;

    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:3000/api${path}`, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
                
        if (location.pathname === "/dashboard") {
          console.log(response.data);
          localStorage.setItem('data', JSON.stringify(response.data));
        } else {
          setSkills(response.data);
        }
      } catch (error) {
        console.error('There was an error!', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [location.pathname, token]);

  if (loading) {
    return <HeaderText>Loading...</HeaderText>;
  }
  
  if (error) {
    return <HeaderText>{error}...</HeaderText>;
  }

  return <Outlet context={{ skills }} />;
};

export default ProtectedPage;

