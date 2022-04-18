import React, {useState, useEffect} from "react";
import NewTestForm from "../../components/NewTestForm/NewTestForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const TestDataInputPage = () => {
    
    const [user, token] = useAuth();

    async function createTest(prop){
        let response = await axios.post('http://127.0.0.1:8000/api/test_data/', prop);
        console.log(response.data);
        if (response.data.id >= 0) {
            alert('Test Data entered Sucessfully!')
            return window.location.reload();
        }
        else {
            return alert('Error. Please double-check entries.');
        }};

    return ( 
        <div>
            <h1 >Test Data Input:</h1>
            <br></br>
            <h3>Enter data below (no units required). <br></br>New environments are automatically logged while entering test data, existing environments will not create a duplicate. Confirmation message will display upon successful test data entry. (If no confirmation message appears, please re-check your entries)</h3>
            <NewTestForm createTest={createTest}/>
        </div>
     );
}
 
export default TestDataInputPage;