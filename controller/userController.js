const Users = require('../config/userDB')
const jwt = require('jsonwebtoken');

const currentUser = (req, res) => {
    const user = req.user;
    res.json(user)
} 

const login = (req, res) => {
    const {email,password} = req.body;
    const user = Users.find(User => User.email == email);
    if(user){
        const userToken = jwt.sign({
            user : {
                username : user.name,
                email : user.email,
                id : user.id
            }
        },
            process.env.ACCESS_TOKEN,
        );
        res.status(200).json({userToken});
    } else {
            res.status(401)
            throw new Error("Invalid email or password");
    };
};

const register = (req, res) => {
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
  
    Users.push(user);
    res.json({ message : "User Registered", user});
}

module.exports = {register, login, currentUser}