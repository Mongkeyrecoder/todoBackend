const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const indexRouter=require('./routes/index')
const app= express()
const cors = require('cors')
require('dotenv').config()
 const MONGODB_URI_PROD=process.env.MONGODB_URI_PROD;
 const mongoURI='mongodb+srv://admin:seoul2022@cluster.idqly55.mongodb.net/todo-student'
app.use(cors())

app.use(bodyParser.json())
app.use('/api',indexRouter)



mongoose.connect(mongoURI).then(()=>console.log('mongoose connected'))
.catch((err)=>{console.log('db connection fail',err)})

app.listen(80,()=>{
   
})
app.get('/',(req,res)=>{
   res.send('hello')
})