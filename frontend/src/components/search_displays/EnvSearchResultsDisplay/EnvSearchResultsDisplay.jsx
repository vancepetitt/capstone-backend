import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const EnvironmentSearchResultsDisplay = ({searchData}) => {
    
    const navigate = useNavigate();
    const [rateFiltered, setRateFiltered] = useState([])
    console.log('ratefiltered', rateFiltered)

    useEffect(() => {
        const rateFilter = function() {
            let response = searchData.filter((test) => {
                if(test.corrosion_rate < 5 && test.localized === "none") {
                    return true
                } else {
                    return false
                }
            })
            setRateFiltered(response)
        };
        rateFilter();

    }, []);

    return ( 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Environment</th>
                        <th>Concentration (Vol%)</th>
                        <th>Temperature (C)</th>
                        <th>Test Duration (days)</th>
                        <th>Material</th>
                        <th>Material Family</th>
                    </tr>
                </thead>
                <tbody>
                    {rateFiltered.length > 0 && rateFiltered.map((test) => {
                        return (
                            <tr key={test.id}>
                                    <td>{test.environment.name}</td>
                                    <td>{test.environment.concentration}</td>
                                    <td>{test.environment.temperature}</td>
                                    <td>{test.environment.duration}</td>
                                    <td><button onClick={() => navigate("/datadisplay", {state:{test:test}})}>{test.material.designation}</button></td>
                                    <td>{test.material.family.family}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default EnvironmentSearchResultsDisplay;