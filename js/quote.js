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
        // add the link for the twitter button
        $("#tBtn").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes," + author.replace(" ", "") + "&related=freecodecamp&text=" + quote.replace(";", "") + "-" + author);
    });
}

// when the window is load
$(document).ready(function() {
    newQuote();

    //when the user click the New Quote button
    $("#newQuote").on("click", function() {
        newQuote();
    });

    // when the facebook button click.
    //create a link and make a post in facebook
    $("#fBtn").on("click", function() {
        var a = $("<a></a>").attr("href", "https://www.facebook.com/dialog/share?app_id=145634995501895&display=popup&href=" + permalink + "&quote=" + quote + "\n-" + author);
        a.attr("target", "_blank");
        a.attr("id", "a");
        $("body").append(a);
        $("#a")[0].click();
        $("#a").remove();
    });

});