const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 2020;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});