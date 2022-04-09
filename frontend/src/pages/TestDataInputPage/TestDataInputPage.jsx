import React from "react";
import useAuth from "../../hooks/useAuth";

const TestDataInputPage = (props) => {
    
    const [user, token] = useAuth();
    
    return ( 
        <div>
            <h1>Input Data Here</h1>
            <form>
                
            </form>
        </div>
     );
}
 
export default TestDataInputPage;