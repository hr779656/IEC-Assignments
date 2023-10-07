const  read_user = require('../model/signup')

const userList = async (req, res) =>{
    try{
    const allUsers = await read_user.findAll()
    res.status(200).send(allUsers)
    }catch(err){
     console.log(err)
     res.status(500).json({ error: 'Error fetching users' });
    }
}

module.exports = {userList}