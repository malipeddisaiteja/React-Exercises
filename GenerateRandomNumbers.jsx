import { useState } from "react";

export default function App() {
	const [startRange, setStartRange] = useState();
	const [endRange, setEndRange] = useState();
	const [randomNumber, setRandomNumber] = useState();

	const handleStartRange = (event) => {
		setStartRange(event.target.valueAsNumber);
	};
	const handleEndRange = (event) => {
		setEndRange(event.target.valueAsNumber);
	}
	const handleSubmit = () => {
		console.log("on submit start: "+startRange+" type: "+typeof(startRange));
		console.log("on submit end: "+endRange+" type: "+typeof(endRange));
		getRandom();
	}
	const getRandom = () => {
		console.log("start: "+startRange+" type: "+typeof(startRange));
		console.log("end: "+endRange+" type: "+typeof(endRange));
		if(typeof(startRange) === 'number' && typeof(endRange) === 'number'){
			const result = Math.floor(Math.random() * (endRange-startRange) + startRange);
			setRandomNumber(result);
		}
		else{
			setRandomNumber("Invalid Input");
		}
	}
	return (
		<>
			<h1>
				Hello there!
			</h1>
			<input type="number" id = "startRange" onChange={handleStartRange}/>
			<input type="number" id = "endRange" onChange={handleEndRange}/>
			<button type="submit" id="generate" onClick={handleSubmit}>
				Generate
			</button>
			<div id="randomNumber">
				{randomNumber}
			</div>
		</>
	);
}
