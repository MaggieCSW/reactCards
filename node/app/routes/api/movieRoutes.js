
// 1.
const express = require('express')
const router = express.Router()

// 3.
const dao = require('../../daos/dao')


// 4. call on each method we just wrote
router.get('/', (req, res)=> {
    dao.findAll(req, res)
})

router.get('/sort', (req, res)=> {
    dao.sort(req, res)
})

router.get('/:id', (req, res)=> {
    dao.findById(req, res, req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})


//  2. 
module.exports = router