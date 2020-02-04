//Array of strings
var topics = ["the x files", "fresh prince of bel air", "the office us",
    "mad tv", "family guy", "family matters", "adventure time"];

//HTML button creation
function createButtons() {
    $("#placebuttons").empty();
    for (i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("show");
        newButton.attr("show-name", topics[i]);
        newButton.attr("id", "button");
        newButton.text(topics[i]);
        $("#placebuttons").append(newButton);

    }
}

//On-click functions
$("#giphy").on("click", function() {
    console.log("HEY!");

});









createButtons();