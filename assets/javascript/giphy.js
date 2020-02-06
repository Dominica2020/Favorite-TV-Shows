//Array of strings
var topics = ["the x files", "fresh prince of bel air", "the office us",
    "mad tv", "family guy", "family matters", "adventure time"];

//Call Functiom
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
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+type+"&api_key=4WTlWiJ9gXT1QsgpJicnlDN7sahz0Fag&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }) 
      .then(function(response) {
        console.log(response);
      });


});









