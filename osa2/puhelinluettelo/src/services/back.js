import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const dele = (id) => {
	return axios.delete(`${baseUrl}/${id}`)
}
// Jostakin syystä getAll ei toiminnut nimetä ja valitti et ei ole functio
export default { 
  getA: getAll, 
  create: create, 
  update: update,
  dele: dele
}
