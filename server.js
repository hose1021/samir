const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3000

// Enable gzip compression
app.use(compression())

// Serve static files from dist directory
app.use(express.static(path.join(__dirname, 'dist')))

// Handle SPA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 