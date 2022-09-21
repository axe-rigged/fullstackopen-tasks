import Part from './part.js'

const Content = ({content}) => {
	console.log(content)
	return(
		<div>
		{
			content.map(content=> <Part key={content.id} name={content.name} exercises={content.exercises} />
		)}
		</div>
	)
}

export default Content
