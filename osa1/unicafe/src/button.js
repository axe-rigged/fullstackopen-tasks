//Button = (props, mutta avattuna objectina/monena atrributena. Helpottaa jos tulee monta eri muutja ja tulevaisuus käyttöä varten)
const Button = ({addvalue, text}) =>{
	return(
		<>
			<button onClick={addvalue}>{text}</button>
		</>
	)
}

export default Button
