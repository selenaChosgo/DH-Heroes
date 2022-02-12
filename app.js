const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('DH Heroes/public/img'))


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/index.html'))
})


app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/babbage.html'))
})


app.get('/berners-lee', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/berners-lee.html'))
})


app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/clarke.html'))
})


app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/hamilton.html'))
})


app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/hopper.html'))
})


app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/lovelace.html'))
})


app.get('/turing', function(req, res){
    res.sendFile(path.join(__dirname, '/DH Heroes/views/turing.html'))
})





app.listen(3030, ()=>{
    console.log('servidor levantado')
} )