//Express
const { Router } = require('express')
const router = Router()
//PATH
const path = require('path')
//Colors
const color = require('colors')

router.get('/order-summery', (req, res) => {
    try {
        // res.status(200).sendFile(__dirname, 'public/order-summary/index.html')
        res.sendFile(path.resolve('public', 'order-summary', 'index.html'))
        // __dirname, '../public/order-summary/index.html'))
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

module.exports = router;