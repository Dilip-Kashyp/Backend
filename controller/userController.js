const Users = require('../config/userDB')

const getUser = (req, res) => {
    const {email,password} = req.body;
    const getuser = Users.find(User => User.email == email);
    const sessions = req.session.user
    if(getuser){
        res.json({
            "message" : `user found with ${email} email`,
            "session" : sessions,
            "User" : getuser,
        })
    }
    else{
        res.json({
            "message" : `user not found with ${email} emali`,
            "User" : '',
        })
    }
} 

const createUser = (req, res) => {
    const { name, email, password } = req.body;
    if(!name || !email || !password){
        res.json({error : "All field Required"});
        return 
    }
    const user = {
        "name" : name,
        "email" : email,
        "password" : password,
    }
    req.session.user = user.email
    Users.push(user);
    res.json({ message : "User Registered", user});
}

module.exports = {createUser, getUser}