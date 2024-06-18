const User = require('../modals/userModal')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const JWT_KEY = process.env.JWT_SECRET_KEY

const register = async function (req, res) {
    try {
        const { name, username, email, password, confirmPassword, isAdmin } = req.body;
        if (!name || !username || !password || !confirmPassword) {
            console.log("All fields are required")
            return res.status(400).send("All fields are required");
        }
        if (confirmPassword !== password) {
            console.log("passwords not same")
            return res.send("passwords not same")
        }

        // if the user already exists
        const userExist = await User.findOne({ username: username })
        if (userExist) {
            console.log("User already exists the same username")
            return res.json("User already exists the same username")
        }

        // encrypt password 
        const saltRounds = 10;
        var salt = bcrypt.genSaltSync(saltRounds);
        bcrypt.hash(password, salt)
        var hashPassword = bcrypt.hashSync(password, salt);

        // if the user does not exist the already
        await User.create({ name, username, email, password: hashPassword, confirmPassword, isAdmin })
        res.send("Registration completed Successfully")
        console.log("Registration completed Successfully")
    } catch (error) {
        console.log("Registration failed")
        console.log("Registration failed")
    }
}


const login = async function (req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        console.log("All fields are required")
        return res.status(400).send("All fields are required");
    }

    const userExist = await User.findOne({ username: username });

    // if user does not exist
    if (!userExist) {
        console.log("User does not exist please register")
        return res.send("User does not exist please register")
    }

    if (bcrypt.compareSync(password, userExist.password)) {
        // const token = jwt.sign(username, JWT_KEY, { expiresIn: '1d' })
        const token = jwt.sign({ username }, JWT_KEY, { expiresIn: '1h' });
        res.json({
            msg: "Login Successful",
            username,
            token,

        })
        console.log("msg: Login Successful")
    }
    else {
        res.send("Incorrect Credentials")
        console.log("Incorrect Credentials")
    }
}

module.exports = { login, register }