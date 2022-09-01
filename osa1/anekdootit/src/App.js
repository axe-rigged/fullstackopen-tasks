import { useState } from 'react'
const points = [0,0,0,0,0,0,0]
const App = () => {
	//mahdollisesti objecti kaikille lauseille joissa on votea tai sitten functio tapaa järjestetty määrä
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
	]
	const [selected, setSelected] = useState(0)
	//TArvitaan statet, koska ulkopuolinen ei päivitetty vaan constina ja resetta renderin vaihteessa myös.
	//Ei anna meidän slice tai muuta valuealla
	//const [points, setPoints] = useState([0,0,0,0,0,0,0])
	const [h, setH] = useState(0)	
	
	//Mozilla devista
	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}
	
	const sorter = () => {
		let korkein = points.slice();
		korkein.sort((a,b)=> b-a);
		let found = points.findIndex(x => x === korkein[0]);
		setH(found);
	}

	const nextline = () => {
		setSelected(Math.floor(getRandom(0, anecdotes.length)));
		sorter();
	}
	const vote = () =>{
			points[selected] +=1;
	}
	

	return (
		<div>
			<h1>Anecdote of the day</h1>
			{anecdotes[selected]}
			<br/>
			<>Has {points[selected]} votes.</>
			<br/>
			<button onClick={()=>{vote()}}>Vote</button>
			<button onClick={()=>{nextline()}}>Next anecdotes</button>
			<br/>
			<h1>Anecdote with most vote</h1>
			{anecdotes[h]}
			<br/>
			<>Has {points[h]} votes.</>
		</div>
		)
}

export default App
