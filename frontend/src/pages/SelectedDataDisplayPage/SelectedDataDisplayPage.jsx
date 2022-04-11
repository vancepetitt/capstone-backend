import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import FamilyDataDisplay from "../../components/data_displays/FamilyDataDisplay/FamilyDataDisplay";

const SelectedDataDisplayPage = () => {
    
    const [user, token] = useAuth();
    const {state} = useLocation()    
    console.log(state.test);

    return ( 
        <div>
            <h1>Data Display</h1>
            <FamilyDataDisplay test={state.test}/>
        </div>
     );
}
 
export default SelectedDataDisplayPage;