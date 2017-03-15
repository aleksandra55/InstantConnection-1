app.controller('profileController', function($scope,$window,profileService) {

	$scope.allProfiles = profileService.allProfiles;
	$scope.jobIndex = 0;

	

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



        $scope.OpenPopupWindow = function () {
        	$window.open("//localhost:8000/sendmail.html", "popup", "width=500,height=200,left=10,top=150");
           }


    $scope.choose = function(profile) {
        $scope.profile = profile;
    }

   
	
});

