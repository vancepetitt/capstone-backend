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
    const [newEnvironmentId, setNewEnvironmentId] = useState('')
    const [newMaterialId, setNewMaterialId] = useState('')


    function addNewTest(event) {        
        event.preventDefault();
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
                <input type="text" placeholder="Enter EnvironmentId..." value={newEnvironmentId} onChange={(event) => setNewEnvironmentId(event.target.value)}></input>
                <br></br>
                {/* <input type="text" placeholder="Enter MaterialId..." value={newMaterialId} onChange={(event) => setNewMaterialId(event.target.value)}></input> */}
                <br></br>
                <label>Choose a material:</label>
                <select id="materials" value={newMaterialId} onChange={(event) => setNewMaterialId(event.target.value)}>
                    <option value="">---</option>
                    <option value="1">316L SS</option>
                    <option value="2">C-276</option>
                    <option value="3">C-2000</option>
                </select>
            </form>
            <button type="submit" onClick={addNewTest}>Enter Data</button>
        </div>
     );
}
 
export default NewTestForm;