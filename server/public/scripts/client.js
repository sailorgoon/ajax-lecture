console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded')
    $.ajax({ //this contains an object
        type: 'GET',
        //where request is going
        url: '/all-quotes'
    })
        .then(function (response) {
            $('#allQuotesDisplay').append(`
            <p>"${response[0].quote}" - ${response[0].author} </p>
            <p>"${response[1].quote}" - ${response[1].author} </p>
            <p>"${response[2].quote}" - ${response[2].author} </p>
            `)
        });
        $('#quoteButton').on('click', getQuote );
    }

    function getQuote() {
        $.ajax({
            type: 'GET',
            url: '/quote'
        })
            .then(function (response) {
                $('#randomQuoteDisplay').append(`<p>"${response.quote}" - ${response.author} </p>`);
            });
        
    }