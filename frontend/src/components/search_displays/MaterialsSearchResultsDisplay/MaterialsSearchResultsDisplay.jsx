import React from "react";
import { useNavigate } from "react-router-dom";

const MaterialsSearchResultsDisplay = ({searchData}) => {
    
    const navigate = useNavigate();
    console.log('searchData', searchData)
    
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
                    {searchData.map((test) => {
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
 
export default MaterialsSearchResultsDisplay;