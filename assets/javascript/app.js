// Array Containing Initial Choices
var animes = ["Dragonball Z", "Naruto", "Bleach", "One-Punch Man"];

// Render Function
function renderButtons(){
	$(".anime").empty();
	for (var i = 0; i < animes.length; i++){
		var a = $("<button>");
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
	renderButtons();


});

renderButtons();