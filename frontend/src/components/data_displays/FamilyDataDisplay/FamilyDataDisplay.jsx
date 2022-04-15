import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import {Chart} from "react-google-charts";

const FamilyDataDisplay = ({tests}) => {
    
    const {state} = useLocation();
    const [familyForDisplay, setFamilyForDisplay] = useState(['']);
    //const [rating, setRating] = useState('')
    //const [ratingColor, setRatingColor] = useState('')
    let ratingColor = ''
    //console.log(tests)
    function generateRating () {
        let material = state.test.material.designation;
        let rate = parseInt(state.test.corrosion_rate);
        let localized = state.test.localized;
        let rating = '';
        //let ratingColor = '';
        if (rate < 5 && localized === "none") {
            rating = 'Recommended';
        }
        else if (rate < 5 && localized !== "none") {
            rating = 'Recommended with caution';
        }
         else if (rate >= 20) {
            rating = 'Not Recommended';
        }
        else if (rate < 20 && rate >= 5 && localized === "none") {
            rating = 'Recommended with caution';
        }
        else if (localized.includes('severe')) {
            rating = 'Not Recommended';
        }
        else {
            rating = 'Recommended with caution';
        };
        console.log(rating);
       // setRating(rating);

        if (rating === 'Recommended') {
            ratingColor = 'Green';
        }
        else if (rating === 'Recommended with caution') {
            ratingColor = 'Yellow';
        }
        else if (rating === 'Not Recommended') {
            ratingColor = 'Red';
        };
        console.log('color', ratingColor);
        //setRatingColor(ratingColor);
        return ratingColor;
    };

    let filteredTests = tests.filter(test => test.environment.id === state.test.environment.id && test.material.family.id === state.test.material.family.id)
    console.log('filtered', filteredTests)

    let array = filteredTests.map(test => {

        filteredTests.forEach(test => {

        generateRating()
        
        return [test.material.designation, test.corrosion_rate, ratingColor]
        });
    return [test.material.designation, parseFloat(test.corrosion_rate), ratingColor]
    });
    console.log('array', array)

    function generateFamilyChartData() {
        const data = [
            ["material", "rate", {role: "style"}],
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