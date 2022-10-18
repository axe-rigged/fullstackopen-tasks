import { useState } from 'react'
import ListPersons from './components/listPersons'
import NewForm from './components/newForm'
import Filter from './components/filter'

const App = () => {
  const [persons, setPersons] = useState([
	{ name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [check, setCheck] = useState('')
  

  const addNewUser = (event) =>{
    event.preventDefault();
	if(persons.find(x => x.name === newName)){
		alert(`${newName} is already added to phonebook`)
	}
	else{
		var newHuman = {name: newName, number: newNumber}
		setPersons(persons.concat(newHuman));
		setNewName('');
		setNewNumber('');
	}
  }

  const filterChange = (event) => {setCheck(event.target.value)}
  const nameX = (event) => {setNewName(event.target.value)}
  const nameY = (event) => {setNewNumber(event.target.value)}

  const filtered = persons.filter(person => person.name.toLowerCase().includes(check));
  
  return (
    <div>
      <h2>Phonebook</h2>
		<Filter check={check} filterChange={filterChange}/>
	  <h2>Add a new</h2>
		<NewForm addNewUser={addNewUser} newName={newName} newNumber={newNumber} X={nameX} Y={nameY}/>
      <h2>Numbers</h2>
		<ListPersons filtered={filtered}/>
    </div>
  )

}

export default App
