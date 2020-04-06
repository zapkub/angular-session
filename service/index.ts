import * as express from 'express'
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

let todos = []
app.post('/todos', (req, res) => {
    console.log('save todos!!');
    console.log(JSON.stringify(req.body));
    todos = req.body
    res.json({message: "OK"})
})
app.get('/todos', (req, res) => {
    res.json(todos)
})

app.listen(3000, () => {
    console.log('ready')
})