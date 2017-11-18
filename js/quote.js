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
        //make the box hide and show
        $(".box").hide(300, function() {
            $(this).show(700);
        });
        //make the footer fade out and fade in
        $("#txt").fadeOut(300, function() {
            $(this).fadeIn(700);
        });
    });
}

// change the color of body and the box
function changeColor() {
    var backR = Math.floor(Math.random() * 130);
    var backG = Math.floor(Math.random() * 130);
    var backB = Math.floor(Math.random() * 130);
    var boxR = Math.floor(Math.random() * (255 + 1 - 130) + 130);
    var boxG = Math.floor(Math.random() * (255 + 1 - 130) + 130);
    var boxB = Math.floor(Math.random() * (255 + 1 - 130) + 130);

    $("body").css({
        backgroundColor: "rgb(" + backR + ", " + backG + ", " + backB + ")",
        color: "rgb(" + backR + ", " + backG + ", " + backB + ")"
    });
    $(".box").css({
        backgroundColor: "rgb(" + boxR + ", " + boxG + ", " + boxB + ")"
    });
    $(".btn").css({
        backgroundColor: "rgb(" + boxR + ", " + boxG + ", " + boxB + ")",
        color: "rgb(" + backR + ", " + backG + ", " + backB + ")",
        border: "1px solid " + "rgb(" + backR + ", " + backG + ", " + backB + ")"
    });
    $("#txt,#ttl").css({
        color: "rgb(" + boxR + ", " + boxG + ", " + boxB + ")"
    });

    $(".btn").hover(function() {
        $(this).css({
            color: "rgb(" + boxR + ", " + boxG + ", " + boxB + ")",
            backgroundColor: "rgb(" + backR + ", " + backG + ", " + backB + ")"
        });
    }, function() {
        $(this).css({
            backgroundColor: "rgb(" + boxR + ", " + boxG + ", " + boxB + ")",
            color: "rgb(" + backR + ", " + backG + ", " + backB + ")"
        });
    });
}

// when the window is load
$(document).ready(function() {
    newQuote();

    //when the user click the New Quote button
    $("#newQuote").on("click", function() {
        newQuote();
        changeColor();
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