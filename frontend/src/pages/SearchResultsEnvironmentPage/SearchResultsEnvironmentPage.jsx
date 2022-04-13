import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import EnvironmentSearchResults from "../../components/search_displays/EnvSearchResults/EnvSearchResults";

const SearchResultsEnvironmentPage = ({completeTestData}) => {

    const [user, token] = useAuth();
    const {state} = useLocation();
    const navigate = useNavigate();

    console.log(state.searchName)
    console.log(state.searchConcentration)
    console.log(state.searchTemperature)

    return ( 
        <div>
            <h1>Materials with "recommended" ranking:</h1>
            <h2>{state.searchConcentration}% {state.searchName}, {state.searchTemperature}C</h2>
            <EnvironmentSearchResults completeTestData={completeTestData} searchName={state.searchName} searchConcentration={state.searchConcentration} searchTemperature={state.searchTemperature}/>
        </div>
     );
}
 
export default SearchResultsEnvironmentPage;