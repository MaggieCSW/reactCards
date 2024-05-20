// 1. what we installed to make it run

const express = require('express')
const server = express()

// 5a.
const helmet = require('helmet')
const cors = require('cors')


// 4. const router, server.use comment out and start server (go to terminal in node folder npm run dev)
const router = require('./app/routes/router')


// 2. declares where this info comes out.. on port 3005 (React default to 3000. react and node need to be using different ports so we use 3005)
const port = process.env.port || 3005


// 6. dependencies to help handle security
server.use(helmet())
server.use(cors())


// 5.   do step 5 then go to router.js
server.use(express.json())
server.use(express.urlencoded({ extended: true }))


server.use('/', router)

// 3. shows up in the terminal
server.listen(port, ()=> {
    console.log(`Port ${port} is listening to reactCards`)
})

