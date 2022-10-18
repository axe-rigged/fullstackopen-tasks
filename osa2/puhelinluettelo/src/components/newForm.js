const NewForm = (props) => {

	return(
	<>
      <form onSubmit={props.addNewUser}>
        <div>
          name: <input value={props.newName} onChange={props.X}/>
		</div>
		<div>
          number: <input value={props.newNumber} onChange={props.Y}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
	</>
	)

}
export default NewForm
