import React, {useState, useEffect} from "react";
import NewTestForm from "../../components/NewTestForm/NewTestForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const TestDataInputPage = () => {
    
    const [user, token] = useAuth();
    
    async function createTest(prop){
        let response = await axios.post('http://127.0.0.1:8000/api/test_data/', prop);
        console.log(response.data);
      }

    return ( 
        <div>
            <h1>Input Data Here</h1>
            <NewTestForm createTest={createTest}/>
        </div>
     );
}
 
export default TestDataInputPage;