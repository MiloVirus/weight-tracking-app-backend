const express = require('express')
const cors = require('cors')
const {dbConnection}  = require('../database/config')

class Server
{
    constructor()
    {
        this.app = express()
        this.port = process.env.PORT
        this.dbConnect()
        this.middlewares()
        this.routes()
    }

    async dbConnect()
    {
        await dbConnection()
    }

    routes()
    {
        this.app.use('/api/users', require('../routes/user.routes'))
    }

    middlewares()
    {
        this.app.use(cors())
    }

    listen()
    {
        this.app.listen(this.port, () =>
        {
            console.log(`server running on port ${this.port}`)
        })
    }
}

module.exports = Server