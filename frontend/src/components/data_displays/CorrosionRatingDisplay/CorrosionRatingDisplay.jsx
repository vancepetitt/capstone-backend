import React, {useState, useEffect} from "react";
import {Chart} from 'react-google-charts';
import { useLocation, useNavigate } from "react-router-dom";
import "./CorrosionRatingDisplay.css"

const CorrosionRatingDisplay = (props) => {
    
    const {state} = useLocation(); 
    
    const [rating, setRating] = useState(['']);
    const [ratingDescription, setRatingDescription] = useState(['']);
    const [ratingColor, setRatingColor] = useState(['']);
    
    let material = state.test.material.designation;
    let rate = parseInt(state.test.corrosion_rate);
    let localized = state.test.localized;

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

        let ratingColor = ''
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
        setRatingColor(ratingColor);
    };

    useEffect (() => {
        generateRating()
    }, []);

    function generateDataForChart() {

        const data = [
            ["material", "corrosion rate mil/yr", {role: "style"}],
            [material, rate, ratingColor]
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
            <br></br>
            <h3>**Ratings are generated based upon material performance in the given environment from the test results.<br></br>Ratings will be one of the following options:</h3>
            <br></br>
            <h3 style={{color:"green"}}>Recommended</h3><h3>Chemically compatible in this environment</h3>
            <br></br>
            <h3 style={{color:"yellow"}}>Recommended with caution</h3><h3> - Material may be used with special consideration</h3>
            <br></br>
            <h3 style={{color:"red"}}>Not Recommended</h3><h3> - Material not suitable for this environment.</h3>
            <br></br>
            <br></br>
            <h1>Rating: {rating}</h1>
            <p>{ratingDescription}</p>
            <br></br>
            <Chart chartType="ColumnChart" width="80%" height="400px" data={generateDataForChart()} ></Chart>
            <p height="400px">Localized observations: <br></br>{state.test.localized}</p>
        </div>
     );
};
 
export default CorrosionRatingDisplay;