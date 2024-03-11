require('dotenv').config()
const express= require('express')
const app = express()
const port = 4000/

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/home',(req,res)=>{
    res.send('<h1>Home Page</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to Youtube</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`The app is running on port ${port}`);
})

console.log("hello world");