//  1. express, router, port and export 
// go back to server.js and uncomment


//  1.
const express = require('express')
const router = express.Router()


//  2.
const port = process.env.port || 3005

// 4.
router.get('/api', (req, res) => {
    res.json({
        'All movies': `http://localhost:${port}/api/movie`
    })
})


router.use('/api/movie', require('./api/movieRoutes'))

//  6. after step 6, comment out do daos and then make a file movieRoutes
// router.use('/api/movie', require('./api/movieRoutes'))

// 5. if page does not exist
router.get('*', (req, res) => {
    if (req.url === '/favicon.ico') {
        res.end()
    } else {
        res.send('<h1>404 ERROR -- This page does not exist</h1>')
    }
})

//  3.
module. exports = router