import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {Chart} from "react-google-charts";

const FamilyDataDisplay = (props) => {
    
    const {state} = useLocation();
    const [familyForDisplay, setFamilyForDisplay] = useState(['']);
    const [environmentTests, setEnvironmentTests] = useState(['']);
    
    useEffect(() => {
        getInitialResponse()
    }, [])

    async function getInitialResponse() {
        let response2 = await axios.get(`http://127.0.0.1:8000/api/families/${state.test.material.family.id}/`)
        console.log('family', response2.data)
        setFamilyForDisplay(response2.data)
        
        let response3 = await axios.get('http://127.0.0.1:8000/api/test_data/')
        console.log('env tests', environmentTests)
        setEnvironmentTests(response3.data)
    }

    function generateFamilyChartData() {
        console.log('familydata')
    }



    return ( 
        <div>
            <h2>"{state.test.material.family.family}" Family Performance in {state.test.environment.name}, {state.test.environment.concentration}%, {state.test.environment.temperature}C :</h2>
            <Chart chartType="ColumnChart" width="80%" height="400px" data={generateFamilyChartData()}></Chart>
        </div>
     );
}
 
export default FamilyDataDisplay;