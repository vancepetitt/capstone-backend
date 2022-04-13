import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { useEffect } from "react/cjs/react.production.min";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const MaterialSearchPage = ({completeTestResults}) => {
    
    const [user, token] = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        console.log(completeTestResults)
        setSearchTerm(searchTerm);
        navigate("/searchmaterial", {state:{searchTerm:searchTerm}});
    };

    return ( 
        <div>
            <h1>Search Test Data by Material:</h1>
            <form>
                <div>
                    <input type="text" placeholder="Search by material or material family..." value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} ></input>
                </div>
                <button onClick={handleSubmit} type="submit">Search</button>
            </form>
        </div>
     );
}
 
export default MaterialSearchPage;