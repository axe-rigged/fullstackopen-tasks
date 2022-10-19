import { useState, useEffect } from 'react'
import ListPersons from './components/listPersons'
import NewForm from './components/newForm'
import Filter from './components/filter'
import Services from './services/back'
import './index.css'
import Notification from './components/error'

// En ole varma olisko hyvä idea tehdä yksi ojecti jota muuttaa ja käyttää tässä, mutta huonoja tapahtunut delayn kanssa
const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [check, setCheck] = useState('')
  const [message, setMessage] = useState('Nice')
  const [stat, setStat] = useState()

	useEffect(()=>{
		Services.getA().then(response=>{setPersons(response.data)})
	},[])

	const updateDB = (x) => {
		Services.create(x).then(response=>{setPersons(persons.concat(response.data))})
	}

	//Täällä toimii update callin jälkee get functio ja päivittäminen
  const addNewUser = (event) =>{
    event.preventDefault();
	if(persons.find(x => x.name === newName)){
		if(window.confirm(`${newName} is already in phonebook. Would you like to update number with new one?`)){
			var id = persons.find(x=>x.name === newName)
			Services.update(id.id, {...id, number:newNumber})
			Services.getA().then(response=>{setPersons(response.data)})
			setMessage(`Information of ${id.name} has been updated`)
			setStat(true)
			setTimeout(()=>{setMessage(null)}, 5000)
		}
	}
	else{
		var newHuman = {name: newName, number: newNumber}
		updateDB(newHuman)
		setMessage(`${newHuman.name} was created!`)
		setStat(true)
		setNewName('');
		setNewNumber('');
		setTimeout(()=>{setMessage(null)}, 5000)
	}
  }
	// Jonkin syyn takia promise base ei toimi jos on peräkanaan saman blockin sisällä.
	// Tarviminen await tai sit odottaa et viesti on tullu ja sit päivittää. Mutta tälläkin tapaa toimii
	const sureDelete = (name, id) => {
		if(window.confirm(`Delete ${name}?`)){
			Services.dele(id)
			.catch(error=>{
				setMessage(`Information of ${name} has already be deleted.`)
				setStat(false)
				setTimeout(()=>{setMessage(null)}, 5000)
			})
		}
		Services.getA().then(response=>{setPersons(response.data)})
}	

  const filterChange = (event) => {setCheck(event.target.value)}
  const nameX = (event) => {setNewName(event.target.value)}
  const nameY = (event) => {setNewNumber(event.target.value)}
	//HYvä muistaa et data jota ei renderidä tapahtuu yhden päivityksen hitaamin.
  const filtered = persons.filter(person => person.name.toLowerCase().includes(check));
  
  return (
    <div>
      <h2>Phonebook</h2>
	  <Notification message={message} stat={stat}/>
		<Filter check={check} filterChange={filterChange}/>
	  <h2>Add a new</h2>
		<NewForm addNewUser={addNewUser} newName={newName} newNumber={newNumber} X={nameX} Y={nameY}/>
      <h2>Numbers</h2>
		<ListPersons filtered={filtered} sureDelete={sureDelete}/>
    </div>
  )

}

export default App
