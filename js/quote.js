var author;
var quote;
var permalink;

// connect to the api and get the json
// put the value of the keys in the box
function newQuote() {
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
        // take the results from the json
        author = json.author;
        quote = json.quote;
        permalink = json.permalink;
        // add the results to the box
        $("#quote-text").html(quote);
        $("#author").html("-" + author);
    });
}

// when the window is load
$(document).ready(function() {
    newQuote();

});