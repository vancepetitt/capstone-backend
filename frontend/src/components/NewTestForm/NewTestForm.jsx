import axios from "axios"
import React, {useState, useEffect} from "react"


const NewTestForm = (props) => {
    
    // const [newName, setNewName] = useState([])
    // const [newConcentration, setNewConcentration] = useState([])
    // const [newTemperature, setNewTemperature] = useState([])
    // const [newMaterial, setNewMaterial] = useState([])
    // const [newFamily, setNewFamily] = useState([])
    const [newRate, setNewRate] = useState('')
    const [newLocalized, setNewLocalized] = useState('')
    // attempt env input
    const [newEnvName, setNewEnvName] = useState('')
    const [newEnvConc, setNewEnvConc] = useState('')
    const [newEnvTemp, setNewEnvTemp] = useState('')
    const [newEnvDur, setNewEnvDur] = useState('')
    const [newEnvironmentId, setNewEnvironmentId] = useState('')
    const [newMaterialId, setNewMaterialId] = useState('')
    const [envs, setEnvs] = useState('')

    async function getEnvs() {
        let response = await axios.get('http://127.0.0.1:8000/api/environments/')
        console.log('envs', response.data);
        setEnvs(response)
    };

    async function createEnv () {
        let response = await axios.post('http://127.0.0.1:8000/api/environments/')
            console.log('created env', response.data)
            setNewEnvironmentId(response.data.id)
    };

    function checkEnvs () {
        let checker = envs.data.filter((environment) => {
                if (newEnvName === environment.name && parseInt(newEnvConc) === environment.concentration && parseInt(newEnvTemp) === environment.temperature && parseInt(newEnvDur) === environment.duration) {
                    setNewEnvironmentId(environment.id)
                    return true    
                } else {return false}});
        console.log('checker', checker)

        let length1 = checker.length

        if(length1===1) {
            console.log('newEnvlId', newEnvironmentId)
        }
        else {
            let environment = {
                name: newEnvName,
                concentration: newEnvConc,
                temperature: newEnvTemp,
                duration: newEnvDur,
            }
            createEnv(environment)
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
        
        getEnvs();
        debugger
        checkEnvs();
        console.log(newEnvironmentId)
        setTimeout(() => {console.log('trying')}, 500);


        let test = {
            corrosion_rate: newRate,
            localized: newLocalized,
            environment_id: newEnvironmentId,
            material_id: newMaterialId,
        };
        console.log(test);
        props.createTest(test);
        //setNew...(''); //allows the form to clear text that had been entered
    };
    


    return ( 
        <div>
            <form>
                
                {/* <input type="text" placeholder="Enter environment..." value={newName} onChange={(event) => setNewName(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter concentration (volume %)..." value={newConcentration} onChange={(event) => setNewConcentration(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter Temperature (degrees Celsius)..." value={newTemperature} onChange={(event) => setNewTemperature(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter material..." value={newMaterial} onChange={(event) => setNewMaterial(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter material family..." value={newFamily} onChange={(event) => setNewFamily(event.target.value)}></input>
                <br></br> */}
                <input type="text" placeholder="Enter corrosion rate (mils/yr)..." value={newRate} onChange={(event) => setNewRate(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter localized corrosion (enter 'none' if no observations are made)..." value={newLocalized} onChange={(event) => setNewLocalized(event.target.value)}></input>
                <br></br>
                {/* <input type="text" placeholder="Enter EnvironmentId..." value={newEnvironmentId} onChange={(event) => setNewEnvironmentId(event.target.value)}></input>
                <br></br> */}
                {/* ATTMEPTING ENV DUAL INPUT*/}
                <input type="text" placeholder="Enter environment name..." value={newEnvName} onChange={(event) => setNewEnvName(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter concentration (volume %)..." value={newEnvConc} onChange={(event) => setNewEnvConc(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter Temperature (degrees Celsius)..." value={newEnvTemp} onChange={(event) => setNewEnvTemp(event.target.value)}></input>
                <br></br>
                <input type="text" placeholder="Enter test duration (days)..." value={newEnvDur} onChange={(event) => setNewEnvDur(event.target.value)}></input>
                <br></br>



                {/* <input type="text" placeholder="Enter MaterialId..." value={newMaterialId} onChange={(event) => setNewMaterialId(event.target.value)}></input> */}
                <br></br>
                <label>Choose a material:</label>
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
            </form>
            <button type="submit" onClick={addNewTest}>Enter Data</button>
        </div>
     );
}
 
export default NewTestForm;