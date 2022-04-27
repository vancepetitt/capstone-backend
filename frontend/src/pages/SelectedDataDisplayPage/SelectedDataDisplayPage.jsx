import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import FamilyDataDisplay from "../../components/data_displays/FamilyDataDisplay/FamilyDataDisplay";
import CorrosionRatingDisplay from "../../components/data_displays/CorrosionRatingDisplay/CorrosionRatingDisplay";
import axios from "axios";
import TemperatureVariation from "../../components/data_displays/TemperatureVariation/TemperatureVariation";
import CommentList from "../../components/commenting/CommentList/CommentList";
import CommentForm from "../../components/commenting/CommentForm/CommentForm";

const SelectedDataDisplayPage = () => {
    
    const [user, token] = useAuth();
    const [tests, setTests] = useState([])
    const {state} = useLocation()    
    console.log(state.test);

    useEffect (() => {
        getTests()
    }, [])

    async function getTests() {
        let response = await axios.get('http://127.0.0.1:8000/api/test_data/')
        setTests(response.data)
        
    };
    //console.log(tests);

    return ( 
        <div>
            <h1>Data Display:</h1>
            <br></br>
            <CorrosionRatingDisplay test={state.test}/>
            <TemperatureVariation tests={tests} test={state.test}/>
            <FamilyDataDisplay tests={tests} test={state.test}/>
            <CommentForm test={state.test}/>
            <CommentList test={state.test}/>
        </div>
     );
}
 
export default SelectedDataDisplayPage;