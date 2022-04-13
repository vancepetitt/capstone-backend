import React, {useState, useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
import EnvironmentSearchResultsDisplay from "../EnvSearchResultsDisplay/EnvSearchResultsDisplay";


const EnvironmentSearchResults = ({completeTestData, searchName, searchConcentration, searchTemperature}) => {

    const navigate = useNavigate();
    const [searchData, setSearchData] = useState([])

    console.log(completeTestData, searchName, searchConcentration, searchTemperature)
    
    //test.environment.name.toLowerCase() === searchName.toLowerCase() && test.environment.temperature >= searchTemperature && 

    useEffect(() => {
        const searchFilter = function() {
            let response = completeTestData.filter((test) => {
                if(test.environment.name.toLowerCase() === searchName.toLowerCase() && test.environment.temperature >= searchTemperature &&parseInt(test.environment.concentration) === parseInt(searchConcentration)) {
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