import React, {useState, useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
import EnvironmentSearchResultsDisplay from "../EnvSearchResultsDisplay/EnvSearchResultsDisplay";


const EnvironmentSearchResults = ({completeTestData, searchName, searchConcentration, searchTemperature}) => {

    const navigate = useNavigate();
    const [searchData, setSearchData] = useState([])    
    const [rateFiltered, setRateFiltered] = useState([])

    console.log(completeTestData, searchName, searchConcentration, searchTemperature)
    
    //test.environment.name.toLowerCase() === searchName.toLowerCase() && test.environment.temperature >= searchTemperature && 

    useEffect(() => {

        searchFilter();
        
    }, []);

    const searchFilter = function() {
        let response = completeTestData.filter((test) => {
            if(test.environment.name.toLowerCase() === searchName.toLowerCase() && test.environment.temperature >= searchTemperature &&parseInt(test.environment.concentration) === parseInt(searchConcentration)) {
                return true
            } else {
                return false
            }
        })
        debugger
        setSearchData(response)
        console.log(searchData)
        debugger
        let filtered = response.filter((test) => {
            if(test.corrosion_rate < 5 && test.localized === "none") {
                return true
            } else {
                return false
            }
        })
        setRateFiltered(filtered);
        console.log('rateFiltered', rateFiltered)
    };

    

    return ( 
        <div>
            <EnvironmentSearchResultsDisplay rateFiltered={rateFiltered}/>
        </div>
     );
}
 
export default EnvironmentSearchResults;