const updateUser = require('../model/signup');

const Up_user = async (req, res)=>{
    const userID = req.params.id;
    const {firstname, lastname, email, password} = req.body
    try{
    const user = await updateUser.findByPk(userID);
     if(!user){
        return res.status(404).json({ error: 'User not found' });
     }

     user.firstname = firstname,
     user.lastname = lastname,
     user.email = email,
     user.password = password
     
       await user.save()
       res.status(200).send(user)

    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Error updating user' });
    }
}


module.exports = {Up_user}