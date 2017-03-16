app.controller('profileController', function($scope,$window,profileService, $location, $anchorScroll) {

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

		
      // call $anchorScroll()
      		$location.hash("");
			$location.hash('selectedOne');

      // call $anchorScroll()
      		$anchorScroll();

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



        $scope.OpenPopupWindow = function () {
        	$window.open("//localhost:8000/sendmail.html", "popup", "width=500,height=200,left=10,top=150");
           }


    $scope.choose = function(profile) {
        $scope.profile = profile;
    }

   
	
});

