import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import MaterialSearchResults from "../../components/search_displays/MaterialSearchResults/MaterialSearchResults";

const SearchResultsMaterialPage = ({completeTestData}) => {
    
    const [user, token] = useAuth(); 
    const {state} = useLocation();
    const navigate = useNavigate();
    
    console.log(state.searchTerm)
    return ( 
        <div>
            <h1>Search results for: "{state.searchTerm}"</h1>
            <MaterialSearchResults completeTestData={completeTestData} searchTerm={state.searchTerm}/>
        </div>
     );
}
 
export default SearchResultsMaterialPage;