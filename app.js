const express = require('express');

const app = express();
app.use(express.static("./dist"))
app.listen(3000, function(err) {
    if (err) {
        console.log(err)
    } else {
        console.log('start success')
    }
})