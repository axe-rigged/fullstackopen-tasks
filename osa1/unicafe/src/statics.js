const Staciline = ({text, value}) => {
	return(
			<tr>
				<td>{text}</td><td>{value}</td>
			</tr>
	)
}

const Statics = (props) =>{
	//laske value tässä pikaisesti
	const avg = (props.values.good+props.values.bad*-1)/(props.values.good+props.values.bad+props.values.neutral)
	const all = props.values.bad+props.values.neutral+props.values.good
	const pos = props.values.good/(props.values.bad+props.values.neutral+props.values.good)

	if(props.values.good === 0 && props.values.neutral === 0 && props.values.bad === 0){
		return(<>
			<h1>Statics</h1>
			<h2>No feedback given</h2>
			</>)}
	return(
		<div>
			<h1>Statics</h1>
			<table>
				<tbody>
					<Staciline text="Good" value={props.values.good}/>
					<Staciline text="Neutral" value={props.values.neutral}/>
					<Staciline text="Bad" value={props.values.bad}/>
					<Staciline text="All" value={all}/>
					<Staciline text="Avrage" value={avg.toFixed(2)}/>
					<Staciline text="Positive" value={` ${pos.toFixed(2)} %`}/>
				</tbody>
			</table>
		</div>
	)
}

export default Statics
