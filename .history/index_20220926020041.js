const express = require('express')
const morgan = require('morgan')
const moment = require('moment')
const app = express()
const fs = require('fs')

const timeMoment =  moment().format('MMMM Do YYYY, h:mm:ss a');

const loggerHTTP = fs.createWriteStream(__dirname + '/index.log' , {flags:'a'})

app.use(morgan({stream:loggerHTTP}))

const stringPrueba = '<-- Esta es una prueba a este horario'

loggerHTTP.write( timeMoment + " |MSG| " + stringPrueba + "\n")

process.kill(process.pid, 'SIGTERM')