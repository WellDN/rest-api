import express from 'express'
import cors from 'cors'
import routerItems from './router';

// Server port
const PORT = process.env.PORT || 4000
// Server host
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()
// JSON
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Endpoint
app.get('/', (req, res) => {
    res.send('Welcome!')
})
// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))
// Request
app.use((req, res) => {
    res.status(404)
})
//Routes
app.use('/api', routerItems)

// Start server
app.listen(PORT, () => {
    console.log(`Running Server ${HOSTNAME}:${PORT}`)
})

app.all('*', function (req, res) {
  res.sendFile(__dirname+'/index.html') /* <= Where my ng-view is located */
})