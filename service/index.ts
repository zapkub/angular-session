import * as express from 'express'


const app = express()
app.use(express.json())

let todos = []
app.post('/todos', (req, res) => {
    todos = req.body
    res.json({message: "OK"})
})
app.get('/todos', (req, res) => {
    res.json(todos)
})

app.listen(3000, () => {
    console.log('ready')
})