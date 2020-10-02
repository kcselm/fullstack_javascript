const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}

const requestLogger = (req, res, next) => {
  console.log('Method:', req.method)
  console.log('Path:  ', req.path)
  console.log('Body:  ', req.body)
  console.log('---')
  next()
}

// app.use(requestLogger)
app.use(morgan('tiny'))
morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ')
})

let persons = [
  {
    name: 'Arto Hellas',
    number: '040-123456',
    id: 1,
  },
  {
    name: 'Ada Lovelace',
    number: '39-44-5323523',
    id: 2,
  },
  {
    name: 'Dan Abramov',
    number: '12-43-234345',
    id: 3,
  },
  {
    name: 'Mary Poppendieck',
    number: '39-23-6423122',
    id: 4,
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

//GET all persons
app.get('/api/persons', (req, res) => {
  const numberOfPeople = persons.map((person) => person.name).length
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
  const person = persons.find((person) => person.id === id)
  if (person) {
    res.json(person)
  } else {
    // res.status(404).end()
    res.send('<p>There are no people with that id</p>')
  }
})

const generateID = () => {
  // create id's between 100 and 1000
  const id = 100 + Math.floor(Math.random() * 900)
  return id
}

//POST a new person to the object
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name) {
    return res.status(400).json({
      error: 'content missing',
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateID(),
  }
  // res.send(`<h1>${id}</h1>`)

  persons = persons.concat(person)

  console.log(person)

  res.json(person)
})

// app.post('/api/persons', (request, response) => {
//   const person = request.body
//   console.log(person)

//   response.json(person)
// })

//DELETE person from the object
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter((person) => person.id !== id)

  res.status(204).end()
})

app.use(unknownEndpoint)

// const morgan = (tiny, ) => {

// }

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
