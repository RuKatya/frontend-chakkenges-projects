//Express
const { Router } = require('express')
const router = Router()

//Colors
const color = require('colors')

router.get('/', async (req, res) => {
    try {
        res.sendFile('index.html')
    } catch (err) {
        console.log(color.bgRed.black(err))
    }
})

module.exports = router;