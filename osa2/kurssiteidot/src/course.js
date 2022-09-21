import Content from './content'
import Header from './header'
import Total from './total'

const Course = (props) => {
	console.log(props)

	return(
		<>
		{
		props.course.map((course)=>
		<div key={course.id}>
			<Header header = {course.name}/>
			<Content content = {course.parts}/>
			<Total total = {course.parts}/>
		</div>
		)
		}
		</>
	)
}
export default Course
