//EXPRESS
const express = require('express');
const app = express(); //express
//PATH
const path = require('path')
//Colors
const color = require('colors')
//PORT
const PORT = process.env.PORT || 6565; //connect to port 6565

app.use(express.static(path.resolve(__dirname, 'public'))) //static
app.use(express.static(path.resolve(__dirname, 'public/order-summary'))) //static

//ROUTER
const index = require('./router')
const projects = require('./router/projects')

app.use('/', index)
app.use('/', projects)

try {
    app.listen(PORT, () => {
        console.log(color.bgBlue.black(`Server listen on`, color.bgBlue.white(`http://localhost:${PORT}`)))
    })
} catch (err) {
    console.log(color.bgRed.black(err))
}