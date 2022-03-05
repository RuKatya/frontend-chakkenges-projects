//Express
const { Router } = require('express')
const router = Router()

//PATH
const path = require('path')
//Colors
const color = require('colors')

router.get('/order-summery', async (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../public/order-summary/index.html'))
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

module.exports = router;