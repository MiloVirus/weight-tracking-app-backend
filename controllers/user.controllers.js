const User = require('../models/user')
const {validationResult} = require('express-validator')
const bcryptjs = require('bcryptjs')

const usersGet = async(req, res) =>
{
    await res.json({'msg' : 'get'})
}

const usersPost = async(req,res) => 
{   
    const errors = validationResult(req)
    if(!errors.isEmpty())
    {
        return res.status(400).json(errors)
    }

    const user = new User(req.body)

    const existEmail = await User.findOne({email : user.email})

    if(existEmail)
    {
        return res.status(400).json({
            'msg': 'Email already registered'
        })
    }

    const salt = bcryptjs.genSaltSync()

    user.password = bcryptjs.hashSync(user.password, salt)

    await user.save()
    
    res.json({
        'msg' : 'post',
        user
    })
}

const usersPut = async(req,res) => 
{
    await res.json({'msg' : 'put'})
}

const usersDelete = async(req,res) => 
{
    await res.json({'msg' : 'delete'})
}

module.exports = {usersGet, usersPost, usersPut, usersDelete}