const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const app = express()


//init middleware
app.use(morgan("dev"))
//app.use(helmet())
app.use(compression())

//init db

//init routes
app.get('/', (req, res, next) => {
    const strCompress = 'Hello World'

    return res.status(200).json({
        message: 'Welcome',
        metadata: strCompress.repeat(100000)
    })
})

//handling error

module.exports = app