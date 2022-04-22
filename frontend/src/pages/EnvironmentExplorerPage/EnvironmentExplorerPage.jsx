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
        setSearchTemperature(searchTemperature)
        navigate("/searchenvironment", {state:{searchName:searchName, searchConcentration:searchConcentration, searchTemperature:searchTemperature}});
    };



    return ( 
        <div>
            <h1>Environment Explorer</h1>
            <br></br>
            <h3>Search for a specific environment here to display a list of materials recommended for use in that environment. Results can be selected for more detailed data. If data exists for an environment at or above the temperature of interest, the data will be considered in the request.</h3>
            <form>
                <br></br><label>Environment Name:</label><br></br>
                <input type="text" placeholder="Enter environment..." value={searchName} onChange={(event) => setSearchName(event.target.value)}></input>
                <br></br>
                <label>Concentration (Vol %):</label><br></br>
                <input type="text" placeholder="Enter concentration (volume %)..." value={searchConcentration} onChange={(event) => setSearchConcentration(event.target.value)}></input>
                <br></br>
                <label>Temperature (C):</label><br></br>
                <input type="text" placeholder="Enter temperature (degrees Cesius)..." value={searchTemperature} onChange={(event) => setSearchTemperature(event.target.value)}></input>
            </form>
            <button onClick={handleSubmit} type="submit">Search</button>
        </div>
     );
}
 
export default EnvironmentExplorerPage;