'use strict';

(function(){                                                                     

var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	var aceVentura = "https://silencemontureaction.files.wordpress.com/2016/02/ace-ventura-rayban-predator.jpg";
	var mrRobot = "http://cdn1us.denofgeek.com/sites/denofgeekus/files/mr_robot_cropped_117.jpg";
    var houseOfCards = "http://www.notizie.it/wp-content/uploads/2016/04/Serie-tv-da-vedere-simili-a-House-of-Cards.jpg";
    var gomorra = "https://upload.wikimedia.org/wikipedia/it/8/85/Gomorra_La_serie.png";
    var indieGames = "https://i.ytimg.com/vi/GhaT78i1x2M/maxresdefault.jpg";

	var movieList = [{
		title: "Ace Ventura",
		image: aceVentura,
		description: "Amazing Crazy movieee!!!"
	},
	{
		title: "Mr. Robot",
		image: mrRobot,
		description: "Hacker!!!"
	},
	{
		title: "House of Cards",
		image: houseOfCards,
		description: "President of USA"
	},
	{
		title: "Gomorra",
		image: gomorra,
		description: "Naples rulez!!!"
	},
	{
		title: "Indie Games",
		image: indieGames,
		description: "indipendent games maker!!!"
	}];
	/*$scope.movieTitle = movie.title;
	$scope.movieImage = movie.image;
	$scope.movieDescription =  movie.description;*/

	$scope.movies = movieList;

    /*$scope.firstName = "Rob";
    $scope.lastName = "Aff";*/
});

app.controller('subCtrl', function($scope){
	$scope.title = "Available to watch " + $scope.movies.length + " movies!";
});


app.controller('formCtrl', function($scope){
	console.log('okkkkkk');	
});

})(); 

