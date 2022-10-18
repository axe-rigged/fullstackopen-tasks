const ListPersons = ({filtered}) => {
	return (
	<>	
	  {
		filtered.map((person, index) => <p key={index}> {person.name} {person.number}</p>)
	  }
	</>
	)	
}
export default ListPersons
