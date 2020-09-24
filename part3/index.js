const express = require('express')
const app = express()
const bodyParser = require('body-parser')

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
    },
    {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
    },
    {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
    },
    {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
    }
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

//GET all persons
app.get('/api/persons', (req, res) => {
  const numberOfPeople = persons.map(person => person.name).length
  const time = Date.now()
  console.log(persons)
  res.send(
    `<div>
      <div>Phonebook has info for ${numberOfPeople} people</div>
      <br>
      <div>${new Date()}<div/>
    <div/>`
  )
})

//GET a particular person
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    // response.status(404).end()
    res.send('<p>There are no people with that id</p>')
  }
  })

//POST a new person to the object
app.post('/api/persons', (req, res) => {
  // create id's between 100 and 1000
  const id = 100 + Math.floor(Math.random() * 900) 
  // const person = {
  //   name: "",
  //   number: "",
  //   id: id
  // }
  // res.send(`<h1>${id}</h1>`) 

  const person = req.body
  console.log(person)

  res.json(person)

})

app.post('/api/persons', (request, response) => {
  const person = request.body
  console.log(person)

  response.json(person)
})

//DELETE person from the object
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})