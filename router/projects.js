//Express
const { Router } = require('express')
const router = Router()
const express = require('express');
const app = express(); //express
//PATH
const path = require('path')
//Colors
const color = require('colors')

router.get('/order-summery', async (req, res) => {
    try {
        res.sendFile(path.resolve(__dirname, '../public/order-summary/index.html'))
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

module.exports = router;