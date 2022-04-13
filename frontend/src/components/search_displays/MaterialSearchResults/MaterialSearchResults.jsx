import React, {useState, useEffect} from "react"; 
import { useNavigate } from "react-router-dom";
import MaterialsSearchResultsDisplay from "../MaterialsSearchResultsDisplay/MaterialsSearchResultsDisplay";

const MaterialSearchResults = ({completeTestData, searchTerm}) => {

    const navigate = useNavigate();
    const [searchData, setSearchData] = useState([])

    console.log(completeTestData, searchTerm)
    
    useEffect(() => {
        const searchFilter = function() {
            let response = completeTestData.filter((test) => {
                if(test.material.family.family.toLowerCase().includes(searchTerm.toLowerCase()) || test.material.designation.toLowerCase().includes(searchTerm.toLowerCase())) {
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
            <MaterialsSearchResultsDisplay searchData={searchData}/>
        </div>
     );
}
 
export default MaterialSearchResults;