//Array of strings
var topics = ["the x files", "fresh prince of bel air", "the office us",
    "mad tv", "family guy", "family matters", "adventure time"];

//HTML button creation
function createButtons() {
    $("#place-buttons").empty();
    for (i = 0; i < topics.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("show");
        newButton.attr("show-name", topics[i]);
        newButton.attr("id", "square");
        newButton.text(topics[i]);
        $("#place-buttons").append(newButton);  
    }
}

//On-click functions
$("#giphy-slot").on("click", function() {
    console.log("HEY!");

});







createButtons();

/*
$("#square").on("click", function() {
    console.log("HEY!");
});
*/