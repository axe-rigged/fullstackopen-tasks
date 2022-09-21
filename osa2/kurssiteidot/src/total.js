const Total = ({total}) => {

	const totals = total.map(total=>{return total.exercises});
	let totalsum = 0;

	for (const p of totals) {
		totalsum += p;
	}

	return(
		<div style={{fontWeight: "bold"}}>
			<p>total of {totalsum} exercises</p>
		</div>
	)
}

export default Total
