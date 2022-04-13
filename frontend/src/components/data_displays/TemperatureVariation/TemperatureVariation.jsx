import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import {Chart} from "react-google-charts";

const TemperatureVariation = ({tests}) => {
    
    const [user, token] = useAuth();
    const {state} = useLocation();

    function generateTempChartData() {

        let filteredTests = tests.filter(test => test.environment.name === state.test.environment.name && test.environment.concentration === state.test.environment.concentration && test.material.id === state.test.material.id);
        console.log('temp filtered', filteredTests)
        
        let array = filteredTests.map(test => {

            filteredTests.forEach(test => {
                return [test.environment.temperature, test.corrosion_rate]
            });
            return [test.material.temperature, parseFloat(test.corrosion_rate)]
        });
        console.log(array)
        
        const data = [
            ["temperature", "corrosion rate"],
              ...array
            ];
        console.log('temp data', data);
        return data;
    };
    
    const options = {
        chart: {
            title: `Corrosion Rate vs temperature: ${state.test.material.designation}`,
            subtitle: "mpy",
        },
    };
    
    return ( 
        <div>
            <h2>{state.test.material.designation} performance in {state.test.environment.concentration}% {state.test.environment.name},  as temperature varies</h2>
            <Chart chartType="LineChart" height="400px" width='50%' data={generateTempChartData()} options={options}></Chart>
        </div>
     );
};

export default TemperatureVariation;