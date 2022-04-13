import React, {useState, useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
import EnvironmentSearchResultsDisplay from "../EnvSearchResultsDisplay/EnvSearchResultsDisplay";


const EnvironmentSearchResults = ({completeTestData, searchName}) => {

    const navigate = useNavigate();
    const [searchData, setSearchData] = useState([])

    console.log(completeTestData, searchName)
    
    useEffect(() => {
        const searchFilter = function() {
            let response = completeTestData.filter((test) => {
                if(test.environment.name.toLowerCase().includes(searchName.toLowerCase())) {
                    return true
                } else {
                    return false
                }
            })
            setSearchData(response)
        };
        searchFilter();
        
    }, []);

    console.log(searchData)

    return ( 
        <div>
            <EnvironmentSearchResultsDisplay searchData={searchData}/>
        </div>
     );
}
 
export default EnvironmentSearchResults;