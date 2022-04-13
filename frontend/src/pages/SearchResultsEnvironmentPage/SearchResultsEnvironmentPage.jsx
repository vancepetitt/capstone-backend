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

    return ( 
        <div>
            <h1>Materials with "recommended" ranking:</h1>
            <h2>{state.searchName}</h2>
            <EnvironmentSearchResults completeTestData={completeTestData} searchName={state.searchName} />
        </div>
     );
}
 
export default SearchResultsEnvironmentPage;