app.controller('profileController', function($scope,profileService) {

	$scope.allProfiles = profileService.allProfiles;
	$scope.jobIndex = 0;

	// $scope.addToMyCollection = function(){
	// 	var beer = {name: $scope.name,
	// 		style: $scope.style,
	// 		abv: $scope.abv,
	// 		img: $scope.img,
	// 		rating: $scope.rating
	// 	};

	// 	beerService.addToMyCollection(beer);
	// }	


	// $scope.removeFromMyCollection = function(beer){
	// 	beerService.removeFromMyCollection(beer);
	// }



	// $scope.addRatingToBeer = function (beer,rating) {
	// 	beerService.addRatingToBeer(beer,Number(rating));
	// }


	// $scope.sortByRating = function (beer) {
	// 	beerService.sortByRating(beer);
	// }


	// $scope.test = beerService.test;

	$scope.show = false ;

	$scope.showIf = function () {
		if (!$scope.show) {
			$scope.show = true;
		} //else {
		// 	$scope.show = true;
		// }
		$scope.jobIndex = 0;
	}

 	$scope.allProfiless = profileService.getProfiles().then(function(response){
 		console.log(response);
 	},function(err){
 		console.error(err);
 	});



    
    $scope.profile = {};

    $scope.next = function() {
        if ($scope.jobIndex >= $scope.allProfiles.length -1) {
            $scope.jobIndex = 0;
        }
        else {
            $scope.jobIndex ++;
        }
    };

        $scope.next2 = function() {
        if ($scope.jobIndex >= $scope.allProfiles.length -1) {
            $scope.jobIndex = 0;
        }
        else {
            $scope.jobIndex ++;
        }
    };

        $scope.next3 = function($scope, $window) {
        if ($scope.jobIndex >= $scope.allProfiles.length -1) {
        	$window.alert("greeting");
            $scope.jobIndex = 0;
        }
        else {
            $scope.jobIndex ++;
        }
    };


    $scope.choose = function(profile) {
        $scope.profile = profile;
    }

   
	
});

