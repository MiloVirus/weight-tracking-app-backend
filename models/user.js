const {Schema, model} = require('mongoose')

const userSchema = Schema(
    {
        name: {
            type: String,
            required: [true, 'Name required']
        },
        lastName: 
        {
            type: String,
            required : [true, 'Last name required']
        },
        age: {
            type: String
        },
        email:{
            type: String,
            unique: [true, 'email unique']
        },
        password: 
        {
            type: String,
            required: [true,'password required']
        }
    }
)

module.exports = model('User', userSchema)