import axios from 'axios';
import React, { useState, useEffect } from 'react';

const HomeData = () => {

    const [completeTestData, setCompleteTestData] = useState([])

    async function getCompleteTestData() {
        let response = await axios.get('http://127.0.0.1:8000/api/test_data/')
        console.log('complete test data', response.data)
        setCompleteTestData(response.data)
        
    }

    useEffect (() => {
        getCompleteTestData()
    }, [])

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
                                <td>{test.material.designation}</td>
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