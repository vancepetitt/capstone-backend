import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SelectedDataDisplayPage = (props) => {
    
    const [user, token] = useAuth();
    const {state} = useLocation()    
    console.log(state.test);

    return ( 
        <div>
            <h1>Data Display</h1>
        </div>
     );
}
 
export default SelectedDataDisplayPage;