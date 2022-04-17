import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {Chart} from "react-google-charts";

const FamilyDataDisplay = ({tests}) => {
    
    const {state} = useLocation();
    
    // const [familyForDisplay, setFamilyForDisplay] = useState(['']);
    // const [ratingFamily, setRatingFamily] = useState('');
    // const [ratingColorFamily, setRatingColorFamily] = useState('');
    
    // // let rate = parseInt(state.test.corrosion_rate);
    // // let localized = state.test.localized;

    // function generateRating () {
        
    //     let rate = parseInt(state.test.corrosion_rate);
    //     let localized = state.test.localized;
        
    //     let ratingFamily = '';
    //     if (rate < 5 && localized === "none") {
    //         ratingFamily = 'Recommended';
    //     }
    //     else if (rate < 5 && localized !== "none") {
    //         ratingFamily = 'Recommended with caution';
    //     }
    //      else if (rate >= 20) {
    //         ratingFamily = 'Not Recommended';
    //     }
    //     else if (rate < 20 && rate >= 5 && localized === "none") {
    //         ratingFamily = 'Recommended with caution';
    //     }
    //     else if (localized.includes('severe')) {
    //         ratingFamily = 'Not Recommended';
    //     }
    //     else {
    //         ratingFamily = 'Recommended with caution';
    //     };
    //     console.log(ratingFamily);
    //     //setRatingFamily(ratingFamily);

    //     let ratingColorFamily = ''
    //     if (ratingFamily === 'Recommended') {
    //         ratingColorFamily = 'Green';
    //     }
    //     else if (ratingFamily === 'Recommended with caution') {
    //         ratingColorFamily = 'Yellow';
    //     }
    //     else if (ratingFamily === 'Not Recommended') {
    //         ratingColorFamily = 'Red';
    //     };
    //     console.log('color', ratingColorFamily);
    //     return ratingColorFamily
    // };


    let filteredTests = tests.filter(test => test.environment.id === state.test.environment.id && test.material.family.id === state.test.material.family.id)
    console.log('filtered', filteredTests)

    let array = filteredTests.map(test => {
        filteredTests.forEach(test => {
            //generateRating()
            return [test.material.designation, parseFloat(test.corrosion_rate)]      
            });

    return [test.material.designation, parseFloat(test.corrosion_rate) ]
    });
    console.log('array', array)

    function generateFamilyChartData() {
        
        const data = [
            ["material", "corrosion rate (mil/yr)"],
            ...array
        ];
        console.log("family data", data)
        return data;     
    };

    return ( 
        <div>
            <h2>"{state.test.material.family.family}" Family Performance:
            <br></br>
            {state.test.environment.name}, {state.test.environment.concentration}%, {state.test.environment.temperature}C :</h2>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={generateFamilyChartData()}></Chart>
        </div>
     );
}
 
export default FamilyDataDisplay;