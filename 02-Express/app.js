const express = require('express')
const app = express();

const peopleRouter = require('./routes/people');
const auth = require('./routes/auth')

// static 
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/login', auth)



app.listen(5000, () => {
  console.log('Server is listening on Port 5000..')
})
