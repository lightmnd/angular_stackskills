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
	

	$scope.movies = movieList;

	$scope.newMovieTitle = "";
	//console.log("qui" + $scope.newMovieTitle);
	$scope.newMovieDescription = "";
	$scope.newMovieimage = "https://www.digitalprolab.com/images/This_Is_What_I_Know_Header2_2016.png";


	$scope.validateTitle = function() {
		if($scope.newMovieTitle.length > 0){
			console.debug($scope.newMovieTitle);
		}
		else {
			window.alert("Title is required!");
		}
	}
/*
	$scope.addMovie = function() {
		var movie = {
			title: $scope.newMovieTitle,
			image: $scope.newMovieimage,
			category: $scope.newMovieCategory,
			description: $scope.newMovieDescription
		}

		$scope.movies.push(movie);
	}

	$scope.checkCategorySelected = function() {
		if($scope.newMovieCategory == "") {
			window.alert("Category cannot be empty");
		}
	}

	$scope.checkDescription = function() {
		console.debug($scope.newMovieDescription);
	}
*/
});

app.controller('subCtrl', function($scope){
	$scope.title = "Available to watch " + $scope.movies.length + " movies!";
});


app.controller('formCtrl', function($scope){
	//console.log('okkkkkk');	
});

})(); 

