const Total = (props) => {
	const totalparts = props.parts.length;

	return(
		<div>
			<p>Total amount of parts: {totalparts}</p>
		</div>
	)
}

export default Total
