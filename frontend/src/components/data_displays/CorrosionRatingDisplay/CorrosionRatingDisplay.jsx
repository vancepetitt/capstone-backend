import React, {useState, useEffect} from "react";
import {Chart} from 'react-google-charts';
import { useLocation, useNavigate } from "react-router-dom";

const CorrosionRatingDisplay = (props) => {
    
    const {state} = useLocation(); 
    
    const [rating, setRating] = useState(['']);
    const [ratingDescription, setRatingDescription] = useState(['']);
    
    let material = state.test.material.designation;
    let rate = parseInt(state.test.corrosion_rate);
    let localized = state.test.localized;
    let style = '';

    function generateRating () {
        let rating = '';
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
        setRating(rating);
    // };

    // function generateRatingDescription({rating}) {
        let ratingDescription = ''
        if (rating === 'Recommended') {
            ratingDescription = 'Chemically compatible. Material is recommended for use in this environment with the least concern.';
        }
        else if (rating === 'Recommended with caution') {
            ratingDescription = 'Material may be used if proper provisons are taken. A thorough inspection and maintenance plan targeting any localized corrosion must be used to mitigate risk.';
        }
        else if (rating === 'Not Recommended') {
            ratingDescription = 'Material not recommended for use in this environment. The corroson rate or localized attack is expected to cause a potentially rapid failure.';
        };
        console.log(ratingDescription);
        setRatingDescription(ratingDescription);
    };

    useEffect (() => {
        generateRating()
    }, []);

    function generateDataForChart() {

        const data = [
            ["material", "rate"],
            [material, rate]
        ];
        console.log("data", data)
        return data;        
    };


    return ( 
        <div>
            <h2>Material: {state.test.material.designation}</h2>
            <h2>Environment: {state.test.environment.name}</h2>
            <h2>Concentration: {state.test.environment.concentration}%</h2>
            <h2>Temperature: {state.test.environment.temperature}C</h2>
            <h2>Test Duration: {state.test.duration} days</h2>
            <Chart chartType="ColumnChart" width="50%" height="400px" data={generateDataForChart()}></Chart>
            <p>Localized observations: {state.test.localized}</p>
            <h2>Rating: {rating}</h2>
            <p>{ratingDescription}</p>
        </div>
     );
};
 
export default CorrosionRatingDisplay;