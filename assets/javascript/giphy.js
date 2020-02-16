//Array of strings
var topics = ["The X Files", "Fresh Prince of Bel Air", "The Office US",
    "Mad Tv", "Family Guy", "Stranger Things", "Family Matters", "Adventure Time"];

//Call functiom to create buttons
createButtons();

//HTML button creation
function createButtons() {
    $("#place-buttons").empty();
    for (i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("show");
        newButton.attr("data-type", topics[i]);
        newButton.text(topics[i]);
        $("#place-buttons").append(newButton);
    }
}

//On-click functions
$(".show").on("click", function () {
    $("#giphy-slot").empty();
    var type = $(this).data("type");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=4WTlWiJ9gXT1QsgpJicnlDN7sahz0Fag&limit=10";
    $.ajax({ url: queryURL, method: "GET" })
        .done(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.attr("class", "image-fluid");
                image.addClass("searchImage");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#giphy-slot").prepend(searchDiv);
            }
        })
});



$("#press").on("click", function (e) {
    e.preventDefault();
    $("#giphy-slot").empty();
    var newSearch = $("input").eq(0).val();
    topics.push(newSearch);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newSearch + "&api_key=4WTlWiJ9gXT1QsgpJicnlDN7sahz0Fag&limit=10";
    $.ajax({ url: queryURL, method: "GET" })
        .done(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var animated = response.data[i].images.fixed_height.url;
                var still = response.data[i].images.fixed_height_still.url;
                var image = $("<img>");
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");
                image.addClass("searchImage");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#giphy-slot").prepend(searchDiv);
            }
        })

    createButtons();
});


// Click event for images

$(document).on("click", ".searchImage", function () { //for things that get dynamically rendered (based on events, not the page loading) asynch
    // "this" - object triggering the function here
    var currentState = $(this).attr("data-state"); // we now have this current state whcih is either still or animated
    // we now want to determine the value of current state
    if(currentState === "still") {
        var animated = $(this).attr("data-animated");
        $(this).attr("data-state", "animated");
        $(this).attr("src", animated);
    }   else {
        var still = $(this).attr("data-still");
        $(this).attr("data-state", "still");
        $(this).attr("src", still);
    }
});





/*

*/
















