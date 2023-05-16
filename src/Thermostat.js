
import { useState } from "react";


const Thermostat = () => {
    const [temp, changeTemp] = useState(72);
    let colorTemp = '#FFFFFF'
    
    if (temp < 72)
        colorTemp = `rgb(${temp*3.5},${temp*3.5},255)`;
    if (temp > 72)
        colorTemp = `rgb(255,${510-temp*3.5},${510-temp*3.5})`;
    const boxStyle = {
        backgroundColor: colorTemp,
        display: 'flex',
        flexDirection: 'column',
        width: '150px',
        border:'2px solid black'
    }
    const buttonStyle = {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '20%',
        paddingRight:'20%'

    }
    return (
        
        <div style={boxStyle}>
            <h1>{temp}°</h1>
            <h3>{temp < 32 ? 'Freezing' : temp < 65 ? 'Cold' : temp < 70 ? 'Cool' : temp < 74 ? 'Just Right' : temp < 78 ? 'Warm' : 'Hot'}</h3>
            <div style={buttonStyle}>
                <button onClick={()=>changeTemp(temp+1)}>+</button>
                <button onClick={()=>changeTemp(temp-1)}>-</button>
            </div>          
        </div>
    )
}



export default Thermostat

