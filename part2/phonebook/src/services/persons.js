import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getPersons = () => {
  return axios.get(baseUrl)
}

const addPerson = newPerson => {
  return axios.post(baseUrl, newPerson)
}

const deletePerson = id => {
  return axios.delete(`${baseUrl}/${id}`)
}

const updateNumber = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default {
  getPersons,
  addPerson,
  deletePerson,
  updateNumber,
}