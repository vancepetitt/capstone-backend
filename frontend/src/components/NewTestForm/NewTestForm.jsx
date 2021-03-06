import axios from "axios"
import useAuth from "../../hooks/useAuth";
import React, {useState, useEffect} from "react"


const NewTestForm = (props) => {
    const [user, token] = useAuth()
    const [newRate, setNewRate] = useState('')
    const [newLocalized, setNewLocalized] = useState('')
    const [newEnvName, setNewEnvName] = useState('')
    const [newEnvConc, setNewEnvConc] = useState('')
    const [newEnvTemp, setNewEnvTemp] = useState('')
    const [newEnvDur, setNewEnvDur] = useState('')
    const [newEnvironmentId, setNewEnvironmentId] = useState('')
    const [newMaterialId, setNewMaterialId] = useState('')
    const [envs, setEnvs] = useState('')
    const [newlyCreatedEnvId, setNewlyCreatedEnvId] = useState('')

    useEffect(() => {
        getEnvs()
    }, [])

    async function getEnvs() {
        let response = await axios.get('http://127.0.0.1:8000/api/environments/')
        console.log('envs', response.data);
        setEnvs(response)
        console.log('1')
    };

    async function createEnv(){
        let environment = {
            name: newEnvName,
            concentration: parseInt(newEnvConc),
            temperature: parseInt(newEnvTemp),
            duration: parseInt(newEnvDur),
        }
        console.log('5b')
        //debugger
        let response = await axios.post('http://127.0.0.1:8000/api/environments/', environment);
        alert('New environment logged in database.')
        console.log(response.data.id);
        setNewlyCreatedEnvId(response.data.id)
        console.log(newlyCreatedEnvId)
        setNewEnvironmentId(response.data.id)
        
        console.log('newEnvId', newEnvironmentId)
        let testn = {
            corrosion_rate: newRate,
            localized: newLocalized,
            environment_id: response.data.id,
            material_id: newMaterialId,
            user_id: user.id
        };
        console.log('6b')
        console.log(testn);
        props.createTest(testn)
    };


    function checkEnvs () {
        let checker = envs.data.filter((environment) => {
                if (newEnvName === environment.name && parseInt(newEnvConc) === environment.concentration && parseInt(newEnvTemp) === environment.temperature && parseInt(newEnvDur) === environment.duration) {
                    return true    
                } else {return false}});
        console.log('checker', checker)
        console.log('3')
        //debugger
        let length1 = checker.length
        if(length1===1) {
            console.log('checker id', checker[0].id)
            let test = {
                corrosion_rate: newRate,
                localized: newLocalized,
                environment_id: checker[0].id,
                material_id: newMaterialId,
                user_id: user.id
            };
            console.log('7a');
            console.log(test);
            //debugger
            props.createTest(test);

        }
        else {
            console.log('4b')
            createEnv()
        }
    };

    function addNewTest(event) {        
        event.preventDefault();
        let environment = {
            name: newEnvName,
            concentration: newEnvConc,
            temperature: newEnvTemp,
            duration: newEnvDur,
        }
        console.log(environment)
        console.log('2')
        if(newEnvironmentId==='') {
        //getEnvs();
        //debugger
        checkEnvs();
        };
        console.log('5a')
        console.log('newEnvId', newEnvironmentId)
        let test = {
            corrosion_rate: newRate,
            localized: newLocalized,
            environment_id: newEnvironmentId,
            material_id: newMaterialId,
            user_id: user.id
        };
        console.log(test);
        console.log('6a')
        makeTest()
    }

    function makeTest() {
        let test = {
            corrosion_rate: newRate,
            localized: newLocalized,
            environment_id: newEnvironmentId,
            material_id: newMaterialId,
            user_id: user.id
        };
        console.log('7a');
        console.log(test);
        //debugger
        props.createTest(test);
    };



    


    return ( 
        <div>
            <form>
                {/* ATTMEPTING ENV DUAL INPUT*/}
                <br></br>
                <label>Environment Name:</label>
                <br></br>
                <input type="text" placeholder="Enter environment name..." value={newEnvName} onChange={(event) => setNewEnvName(event.target.value)}></input>
                <br></br>
                <label>Concentration:</label>
                <br></br>
                <input type="text" placeholder="Enter concentration (volume %)..." value={newEnvConc} onChange={(event) => setNewEnvConc(event.target.value)}></input>
                <br></br>
                <label>Temperature:</label>
                <br></br>
                <br></br>
                <input type="text" placeholder="Enter Temperature (degrees Celsius)..." value={newEnvTemp} onChange={(event) => setNewEnvTemp(event.target.value)}></input>
                <br></br>
                <label>Test duration:</label>
                <br></br>
                <input type="text" placeholder="Enter test duration (days)..." value={newEnvDur} onChange={(event) => setNewEnvDur(event.target.value)}></input>
                <br></br>
                <br></br>
                <label>Choose a material:</label><br></br>
                <select id="materials" value={newMaterialId} onChange={(event) => setNewMaterialId(event.target.value)}>
                    <option value="">---</option>
                    <option value="1">316L SS</option>
                    <option value="2">C-276</option>
                    <option value="3">C-2000</option>
                    <option value="5">C-22</option>
                    <option value="6">304L SS</option>
                    <option value="7">2205</option>
                    <option value="8">2507</option>
                    <option value="9">Alloy 625</option>
                    <option value="10">Alloy 20</option>
                </select>
                <br></br>
                <br></br>
                <label>Corrosion Rate:</label>
                <input type="text" placeholder="Enter corrosion rate (mils/yr)..." value={newRate} onChange={(event) => setNewRate(event.target.value)}></input>
                <br></br>
                <label>Localized corrosion observations:</label>
                <input type="text" placeholder="Enter localized corrosion (enter 'none' if no observations are made)..." value={newLocalized} onChange={(event) => setNewLocalized(event.target.value)}></input>
                <br></br>
            </form>
            <button type="submit" onClick={addNewTest}>Enter Data</button>
        </div>
     );
}
 
export default NewTestForm;