import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FamilyDataDisplay = () => {
    
    const {state} = useLocation();
    const [familyForDisplay, setFamilyForDisplay] = useState([''])
    
    useEffect (() => {
        getFamily()
    }, [])

    async function getFamily() {
        let response = await axios.get(`http://127.0.0.1:8000/api/families/${state.test.material.family.id}/`)
        console.log('family from getFamily', response.data)
        setFamilyForDisplay(response.data)
    }

    return ( 
        <div>
            <h2>Family Performance in {state.test.environment.name}, {state.test.environment.concentration}%, {state.test.environment.temperature}C :</h2>
        </div>
     );
}
 
export default FamilyDataDisplay;