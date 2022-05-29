import { useState } from "react";


export function BodyMassIndexCalculator() {

    const [weight,setWeight] = useState("");
    const [height,setHeight] = useState("");
    const [bmi,setBMI] = useState("");
    const [message,setMessage] = useState("");
    const [weightErrorMessage, setWeightErrorMessage] = useState("");
    const [heightErrorMessage, setHeightErrorMessage] = useState("");
    



function calculateBmi(e) {
    e.preventDefault()

        let bmi = weight / ((height/100) * (height/100))
        setBMI(bmi.toFixed(1));

if (bmi <= 18.5) {
    setMessage("You are underweight, should probably eat a few pizzas.");
    
}

else if (bmi <= 25) {
setMessage("You are healthy, keep it up!")
}

else {
setMessage("You are overweight, cut back on the pizzas.");
}

if (isNaN(bmi) === true) {
    setMessage("Please enter numbers larger than zero.");
    setBMI("Not exactly a number.");
}

else if (bmi === Infinity || bmi === -Infinity) {
    setMessage("Please enter numbers larger than zero.");
    setBMI("Can't divide by zero.");
}



}

function weightInputChecker(e) {
if (!e.target.value) {
    setWeightErrorMessage("");
    setWeight(e.target.value);
    setBMI("");
    setMessage("");
}
else if (isNaN(e.target.value) === true) {
    setWeightErrorMessage("That doesn't seem like a number.");
setWeight(e.target.value);
setBMI("");
setMessage("");
}

else if (isNaN(e.target.value) === true || Number(e.target.value) === 0) {
    setWeightErrorMessage("Please enter a number larger than zero.");
    setWeight(e.target.value);
    setBMI("");
    setMessage("");
}
else {
setWeight(e.target.value);
setWeightErrorMessage("");
}
}

function heightInputChecker(e) {
    if (!e.target.value) {
        setHeightErrorMessage("");
        setHeight(e.target.value);
        setBMI("");
        setMessage("");
    }
    else if (isNaN(e.target.value) === true) {
        setHeightErrorMessage("That doesn't seem like a number.");
    setHeight(e.target.value);
    setBMI("");
    setMessage("");
    }

else if (isNaN(e.target.value) === true || Number(e.target.value) === 0) {
    setHeightErrorMessage("Can't divide by zero.");
    setHeight(e.target.value);
    setBMI("");
    setMessage("");
}

    else {
    setHeight(e.target.value);
    setHeightErrorMessage("");
    }
    }


function clearResults(e) {
    setWeight("");
    setHeight("");
    setBMI("");
    setMessage("");
    setWeightErrorMessage("");
    setHeightErrorMessage("");
}


return (
<div className="bmiWidgetContainer">
    <h2 className="bmiTitle">BMI Calculator</h2>
    
    <form onSubmit={calculateBmi} className="bmiForm">
        
        <div>  
            
                <label htmlFor="weight">Weight (kg)</label>
                <input id="weight" value= {weight} onChange={(e) => weightInputChecker(e)} ></input>
                <p>{weightErrorMessage}
            </p>
        </div>
        

        <div >
         
                <label htmlFor="height">Height (mm)</label>
                <input id="height" value= {height} onChange={(e) => heightInputChecker(e)}></input>
                <p>{heightErrorMessage}
            </p>
        </div>
        

        <div className="bmiButtons">
            <button type="submit">Calculate BMI</button>
            <button type="reset" onClick={(e) => clearResults(e)}>Clear</button>
        </div>

    </form>

    <div>
        <h3 className="bmiResultsTitle">Your BMI is: {bmi}</h3>
        <p>{message}</p>
    </div>

    
</div>
)

}