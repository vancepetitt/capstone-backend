import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const EnvironmentExplorerPage = () => {
    
    const [user, token] = useAuth();
    const [searchName, setSearchName] = useState([]);
    const [searchConcentration, setSearchConcentration] = useState([]);
    const [searchTemperature, setSearchTemperature] = useState([]);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchName);
        setSearchName(searchName);
        setSearchConcentration(searchConcentration);
        navigate("/searchenvironment", {state:{searchName:searchName, searchConcentration:searchConcentration, searchTemperature:searchTemperature}});
    };



    return ( 
        <div>
            <h1>Env. Expl</h1>
            <form>
                <input type="text" placeholder="Enter environment..." value={searchName} onChange={(event) => setSearchName(event.target.value)}></input>
                <input type="text" placeholder="Enter concentration (volume %)..." value={searchConcentration} onChange={(event) => setSearchConcentration(event.target.value)}></input>
                <input type="text" placeholder="Enter temperature (degrees Cesius)..." value={searchTemperature} onChange={(event) => setSearchTemperature(event.target.value)}></input>
            </form>
            <button onClick={handleSubmit} type="submit">Search</button>
        </div>
     );
}
 
export default EnvironmentExplorerPage;