import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {Chart} from "react-google-charts";

const FamilyDataDisplay = ({tests}) => {
    
    const {state} = useLocation();
    const [familyForDisplay, setFamilyForDisplay] = useState(['']);
    
    //console.log(tests)

    let filteredTests = tests.filter(test => test.environment.id === state.test.environment.id && test.material.family.id === state.test.material.family.id)
    console.log('filtered', filteredTests)

    let array = filteredTests.map(test => {

        filteredTests.forEach(test => {
            return [test.material.designation, test.corrosion_rate]
        });
        return [test.material.designation, parseFloat(test.corrosion_rate)]
    });
    console.log(array)

    function generateFamilyChartData() {
        const data = [
            ["material", array],
            ...array
        ];
        console.log("family data", data)
        return data;     
    };



    return ( 
        <div>
            <h2>"{state.test.material.family.family}" Family Performance in {state.test.environment.name}, {state.test.environment.concentration}%, {state.test.environment.temperature}C :</h2>
            <Chart chartType="ColumnChart" width="80%" height="400px" data={generateFamilyChartData()}></Chart>
        </div>
     );
}
 
export default FamilyDataDisplay;