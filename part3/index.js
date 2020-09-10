const express = require('express')
const app = express()

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


app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    res.json(person)
  } else {
    res.send(
      '<p>There are no people with that id</p>'
    )
  }
  })


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})