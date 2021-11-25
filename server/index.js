import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import studentRoutes from './routes/student.js'


const app = express()


app.use(bodyParser.json({limit: "20mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}))
app.use('/students', studentRoutes)

app.use(cors()) 

const PORT = process.env.PORT || 5000;

// const CONNECTION_URL = "mongodb+srv://omairKh:omair20012001omair@cluster0.3iqle.mongodb.net/schoolDB?retryWrites=true&w=majority"
// mongoose.connect(CONNECTION_URL, {
//     useNewUrlParser:true, useUnifiedTopology:true
// }).then(()=> app.listen(PORT,()=>
// console.log(`connection is established and running on port: ${PORT}`)
// )).catch((err)=> console.log(err.message))

mongoose.connect('mongodb://localhost:27017/schoolDB')
mongoose.connection.on('connected', ()=>{
    console.log('DATABASE is connected successfully')
})

mongoose.connection.on('error', ()=>{
    console.log('an error occured')
})
app.listen(PORT, ()=>
    console.log(`connection is established and running on port: ${PORT}`)
)

