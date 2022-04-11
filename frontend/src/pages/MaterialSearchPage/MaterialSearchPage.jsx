import React from "react";
import useAuth from "../../hooks/useAuth";

const MaterialSearchPage = (props) => {
    
    const [user, token] = useAuth();
    
    return ( 
        <div>
            <h1>Material Search</h1>
        </div>
     );
}
 
export default MaterialSearchPage;