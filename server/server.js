const express = require('express');
const app = express();
const PORT = 5000;
const quotes = require('./array1');


app.use(express.static('server/public'));

app.get('/quote', (req, res) => {
    const randomNumber = Math.floor(Math.random()*quotes.length);
    res.send(quotes[randomNumber]);
});


// app.get('/', (req, res) => {
//     console.log('yep it worked');
//  res.send('Happy wednesday');

// });
// app.listen(PORT, function() {
    app.listen(PORT, () => {
console.log('listening on 5000');
});



// $('#arrayParagraph').append(quotes_data);

// const quotes_data = [
//     { quote: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
//     { quote: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
//     { quote: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
// ]
