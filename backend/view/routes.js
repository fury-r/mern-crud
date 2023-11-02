const express=require('express')
const bodyParser =require('body-parser')
const app=express()
const {   insertData,
    getData,
    updateData,
    deleteData}=require('../contoller/controller')



app.use(bodyParser.json())



app.get('/',getData)

app.post('/insert',insertData)
app.post('/update',updateData)
app.delete('/delete',deleteData)


module.exports={app}