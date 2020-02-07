//Array of strings
var topics = ["the x files", "fresh prince of bel air", "the office us",
    "mad tv", "family guy", "family matters", "adventure time"];

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
$("button").on("click", function () {
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
                image.addClass("searchImage");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#giphy-slot").prepend(searchDiv);
            }
        })
});



$("#press").on("click", function () {
    var newSearch = $("input").eq(0).val();
    topics.push(newSearch);
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
                image.addClass("searchImage");
                searchDiv.append(p);
                searchDiv.append(image);
                $("#giphy-slot").prepend(searchDiv);
            }
        })
    createButtons();
    return false;
});



/*
$("#press").on("click", function () {
    var newSearch = $("input").eq(0).val();
    topics.push(newSearch);
    createButtons();
    return false;
});
*/
















