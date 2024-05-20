// 1. for the connection
// do dbconfig first
const con = require('../config/dbconfig')

// 3. creating dao object all inside { }  order does matter (dao = data access object)
//  findAll, findById, sort, create (property names, everything on other side of : is value)
//  taking 1 row out of the container. if there is more than 1 row leaving them in the container
const dao = {
    findAll: (req, res)=> {
        con.execute(
            `SELECT * FROM movie;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR.', error)
                }
            }
        )
    },

    findById: (req, res, id)=> {
        con.execute(
            `SELECT * FROM movie WHERE movie_id = ${id};`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1 ) {
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR: ', error)
                }
            }

        )
    },

    sort: (req, res)=> {
        con.execute(
            `SELECT * FROM movie ORDER BY title;`,
            (error, rows)=> {
                if (!error) {
                    if (rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR.', error)
                }
            }
        )
    },

    //  post method putting info into the database
    create: (req, res)=> {
        if (Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create"
            })
        } else {
            const fields = Object.keys(req.body)
            const values = values = Object.values(req.body)

            con.execute(
                `INSERT INTO movie SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres)=> {
                        if (!error) {
                        res.json({
                            Last_id: dbres.insertId
                        })
                    } else {
                    console.log('DAO Error: ', error)
                    }
                }
            )
        }
    }

}

// go to api and create a file (filenameRoutes.js)


// 2. 
module.exports = dao