import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [country, setCountry] = useState("")
	const [foundCountry, setFound] = useState([])
	const api_key = process.env.REACT_APP_API_KEY

	useEffect(()=>{
		axios.get("https://restcountries.com/v3.1/all")
		.then(response => setFound(response.data))
		console.log(foundCountry)
	}, []);

	const filtCountry = foundCountry.filter(x=>x.name.common.includes(country)) 

	// En tiiä onko paras tapa, mutta ainakin toimii. Pahamieli kun ei voi if laittaa return statementin sisälle
	// Tämä olisi nyt hyvä rikkoa componentiin
	if(filtCountry.length > 10)
	{
		return (
		<div>
		find country
		<input value={country} onChange={(event)=>{setCountry(event.target.value)}}/>
		<br/>
		Too many matches, specify another filter
		</div>
		)
	}
	if(filtCountry.length === 1){
		return(
		<div>		
			find country
			<input value={country} onChange={(event)=>{setCountry(event.target.value)}}/>
			<br/>
			{
				filtCountry.map((theCountry, key)=><div>
					<h1 key={key}>{theCountry.name.common}</h1>
					<p>Capital: {theCountry.capital}</p>
					<p>Area: {theCountry.area}</p>
					<h2>Languages</h2>
					<ul>
					{
						Object.keys(theCountry.languages).map((kieli, i)=>
							<li key={i}>{theCountry.languages[kieli]}</li>
						)
					}
					<br/>
					<img src={theCountry.flags.png} alt="Flag of the country"/>
					</ul>
					</div>
				)
			}
		</div>
		)
	}
	return (
	  <div>
		find country
		<input value={country} onChange={(event)=>{setCountry(event.target.value)}}/>
		<br/>
		{
			filtCountry.map((maa, index)=><div>
				<p key={index}> {maa.name.common} <button onClick={()=>{setCountry(maa.name.common)}}>SHOW</button></p>
			</div>)
		}
	  </div>
  );
}

export default App;
