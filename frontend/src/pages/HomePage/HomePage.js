import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

import HomeData from "../../components/data_displays/HomeData/HomeData";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [completeTestData, setCompleteTestData] = useState([])

  useEffect(() => {
      getCompleteTestData()
  }, []);

  async function getCompleteTestData() {
    let response = await axios.get('http://127.0.0.1:8000/api/test_data/')
    //console.log('complete test data', response.data)
    setCompleteTestData(response.data)
  }

  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      <HomeData completeTestData={completeTestData}/>
      <h2>Welcome to the ChemCompatibility app!!</h2>
      <p>This appication....</p>
      <p>Using the app: </p>
    </div>
  );
};

export default HomePage;
