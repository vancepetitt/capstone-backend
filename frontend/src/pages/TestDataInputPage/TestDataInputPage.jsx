import React, {useState, useEffect} from "react";
import NewTestForm from "../../components/NewTestForm/NewTestForm";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const TestDataInputPage = () => {
    
    const [user, token] = useAuth();
    // const [allMaterials, setAllMaterials] = useState('')
    // const [allEnv, setAllEnv] = useState('')

    
    // useEffect(() => {
    //     populateOptions()
    // }, []);

    // async function populateOptions() {
    //     let responseMat = await axios.get('http://127.0.0.1:8000/api/materials/')
    //     setAllMaterials(responseMat.data);

    //     let responseEnv = await axios.get('http://127.0.0.1:8000/api/environments/')
    //     setAllEnv(responseEnv.data);

    //     console.log('mat', allMaterials)
    //     console.log('env', allEnv)
    // };

    
    async function createTest(prop){
        let response = await axios.post('http://127.0.0.1:8000/api/test_data/', prop);
        console.log(response.data);
        if (response.data.id >= 0) {
            return alert('Test Data entered Sucessfully!')
        }
        else {
            return alert('Error. Please double-check entries.');
        }};

    return ( 
        <div>
            <h1>Input Data Here</h1>
            <NewTestForm createTest={createTest}/>
        </div>
     );
}
 
export default TestDataInputPage;