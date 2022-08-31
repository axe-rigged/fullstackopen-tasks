import { useState } from 'react'
import Statics from './statics'
import Button from './button'

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addG = () =>{setGood(good+1)}
  const addN = () =>{setNeutral(neutral+1)}
  const addB = () =>{setBad(bad+1)}

  return (
    <div>
		<h1>Give feedback</h1>
		<Button addvalue={addG} text="Good"/>	
		<Button addvalue={addN} text="Neutral"/>	
		<Button addvalue={addB} text="Bad"/>	
		<Statics values = {{good, neutral, bad}}/>
    </div>
  )
}

export default App
