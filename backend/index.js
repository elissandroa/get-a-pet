const express = require('express')
const cors = require('cors')

const app = express()

const port = 5000

//Config JSON response
app.use(express.json())

//Solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

//Public folder for images
app.use(express.static('public'))

//Routes


app.get('/', (req, res) => {
    res.status(200).json({message: "Api respondendo na porta 5000"})
})


app.listen(port, () => {
    console.log(`Rodando na porta: ${port}!`)
})

