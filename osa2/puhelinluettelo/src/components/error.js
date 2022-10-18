const Notification = ({ message, stat }) => {
  if (message === null) {
    return null
  }

	if(stat === false){
  return (
    <div className="error">
      {message}
    </div>
  )}

	if(stat === true){
  return (
    <div className="success">
      {message}
    </div>
  )}
}
export default Notification
