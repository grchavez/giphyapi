// Array Containing Initial Choices
var animes = ["Dragonball Z","One-Punch Man", "Attack on Titan", "Sailor Moon"];

// Render Function
function renderButtons(){
	$(".anime").empty();
	for (var i = 0; i < animes.length; i++){
		var a = $("<button>");
		a.attr("type","button");
		a.addClass("btn btn-secondary cateBtn");
		a.text(animes[i]);
		a.attr("data-name", animes[i]);
		$(".anime").append(a);
	}

}

// On Click Function

$(".addAnime").on("click", function(event){
	event.preventDefault();
	var anime = $(".anime-input").val().trim();
	animes.push(anime);
	//Test log//
	console.log(anime);
	renderButtons();
});



// Giphy Function

$(document).on("click", ".btn btn-secondary cateBtn", function(){

	var input = $(this).attr("data-name");

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=3d8Qjg9IrHbxpxvXioeXAgyAk5RNp5MO";

	$.ajax({
		url: queryURL,
		method: "GET"
	})
	.done(function(response){

		var results = response.data;

		for (var i = 0; i < results.length; i++){
			if(results[i].rating !== "r" && results[i].rating !== "pg-13"){
				var gifDiv = $("<div class='card'>");
				var rating = results[i].rating;
				var p = $("<p class='card-text'>").text("Rating: " + rating);
				var gifImage = $("<img class='card-img-top'>");
				gifImage.attr("src", results[i].images.fixed_height.url);
				gifDiv.append(p);
				gifDiv.append(gifImage);

				$(".gifResult").prepend(gifDiv);
			}
		}
	})
});

renderButtons();