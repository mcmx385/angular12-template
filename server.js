const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./dist/ngx-temp'))

app.get('/*', (req, res) => {
    res.sendFile('index.html', { root: 'dist/ngx-temp' })
})

app.listen(process.env.PORT || 4200, () => {
    console.log('listening to port')
})