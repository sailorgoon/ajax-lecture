const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('server'));

app.listen(PORT, function(){
console.log('listening on 5000');
});

