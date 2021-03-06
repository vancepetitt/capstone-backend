import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HomeData = ({completeTestData}) => {

    const {state} = useLocation();
    const navigate = useNavigate();

    return (  
        <div>
            <h2>All Historic Data:</h2>
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
                    {completeTestData.map((test) => {
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
 
export default HomeData;