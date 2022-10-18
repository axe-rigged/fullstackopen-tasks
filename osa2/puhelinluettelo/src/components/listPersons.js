const ListPersons = ({filtered, sureDelete}) => {
	return (
	<>	
	  {
		filtered.map((person, index) => <p key={index}> {person.name} {person.number} <button onClick={()=>{sureDelete(person.name, person.id)}}>DELETE</button></p>)
	  }
	</>
	)	
}
export default ListPersons
