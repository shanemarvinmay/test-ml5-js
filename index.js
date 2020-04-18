const express = require('express');
const app = express();

const port = 3000;
const fs = require('fs');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    fs.readFile("index.html",(err, data) => {
        if (err) throw err;
        // res.send(data);
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(data);
    });
    // res.send('Hello World!')
});

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));