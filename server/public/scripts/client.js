console.log('client.js is loaded');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is loaded')
    $.ajax({ //this contains an object
        type: 'GET',
        //where request is going
        url: '/quote'
    })
        .then(function (response) {
            console.log(response);
        });
        $('#quoteButton').on('click', getQuote );
    }

    function getQuote() {
        $.ajax({
            type: 'GET',
            url: '/quote'
        })
            .then(function (response) {
                $('body').append(`<p>" ${response.quote}" - ${response.author} </p>`);
            });
        
    }