const express = require('express');
const mdb=require('mongoose');
const bcrypt = require('bcrypt');
const signup_schema = require('./models/SignupSchema');

const app=express();
const PORT=process.env.PORT || 8001;

// Middleware to parse JSON
app.use(express.json());

// CORS middleware to allow frontend connections
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});
console.log('Attempting MongoDB connection...');
mdb.connect("mongodb+srv://kanishkasekar:kani123@cluster0.zmysryg.mongodb.net/").then(()=>{
    console.log("Mongodb connection successfull")
}).catch((err)=>{
    console.log("Mongodb connection unsuccessful",err)
})
app.get('/',(req,res)=>{
    res.send("Welcome to backend server")
})
app.get('/json',(req,res)=>{
    res.json({
     "college":"sece",
     "Dept":"Cys",
     "StuCount":"64"
    })  
})
app.get('/static',(req,res)=>{
   res.send('Static file endpoint - update path as needed')
    })

app.get('/signup',(req, res)=>{
    res.send("Signup page - Use POST method to submit signup data")
})

app.post('/signup', async (req, res)=>{
    try {
        const{email,username,password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new signup_schema({email, username, password: hashedPassword});
        await newUser.save();
        res.json({"Message":"Signup successful", "data": {email, username}});
    } catch (error) {
        res.status(400).json({"Message":"Signup failed", "error": error.message});
    }
})

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await signup_schema.findOne({ email });
        
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({"Message":"Login successful", "user": {email: user.email, username: user.username}});
        } else {
            res.status(401).json({"Message":"Invalid credentials"});
        }
    } catch (error) {
        res.status(500).json({"Message":"Server error", "error": error.message});
    }
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})