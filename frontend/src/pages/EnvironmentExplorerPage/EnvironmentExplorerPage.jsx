import React from "react";
import useAuth from "../../hooks/useAuth";

const EnvironmentExplorerPage = (props) => {
    
    const [user, token] = useAuth();
    
    
    return ( 
        <div>
            <h1>Env. Expl</h1>
        </div>
     );
}
 
export default EnvironmentExplorerPage;