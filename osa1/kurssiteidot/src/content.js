const Content = (props) => {
	return(
		<div>
		<ul>
		{
			props.parts.map(part=><li>Name: {part.name}<br/> Exercises: {part.exercises}</li>)
		}
		</ul>
		</div>
	)
}

export default Content
