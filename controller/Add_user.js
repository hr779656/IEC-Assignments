const signUp_schema = require('../model/signup')

const creatUser = async (req, res)=>{
    console.log(req.body)
    try{
        const {firstname, lastname, email, password} = req.body;
        signUp_schema.create({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }).then(Result =>{
            res.status(201).send(Result)
        })
    }catch(err){
        console.log(err)
    }
}
module.exports = {creatUser}