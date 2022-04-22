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
      <h1>Welcome, {user.username}!<br></br>({user.first_name})</h1>
      <br></br>
      <h2>Thank you for using the Chem-Compatibile app!</h2>
      <br></br>
      <br></br>
      <h2>Using the appication:</h2>
      <p >After logging in, a registered employee can utilize the links to perform the task of their choice:<br></br><br></br>"Data by Material" - Search materials and explore their performance data<br></br>"Environment Explorer" - filter environments and get recommended materials<br></br>"Input test Data" - Add test data to the database</p>
      <br></br>
      <h2>About the App:</h2>
      <p>Corrosion causes upwards of an estimated $2.5T/year. The deliberate selection of materials suited for the complex environments found in the chemical industry is paramount to providing safe and reliable operational lifetimes. <br></br><br></br>This appication is intended to be used as a powerful databasing system: allowing for the storage, retrieval, comparison, and input of chemical compatibility data - and connecting that data to the plant and field settings where it is most crucial.</p>
      
    </div>
  );
};

export default HomePage;
