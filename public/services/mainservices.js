app.service('profileService', function($http){
  var profileService = new Object();
  profileService.allProfiles =  [
		// {img:"https://cdn.beeradvocate.com/im/beers/78820.jpg",name:"Kentucky Brunch Brand Stout", style:"American Double / Imperial Stout", abv:12, ratings:[],averageRating:0},
  //   {img:"https://cdn.beeradvocate.com/im/beers/136936.jpg",name:"Good Morning", style:"American Double / Imperial Stout ", abv:8.4,ratings:[], averageRating:0},
  //   {img:"https://cdn.beeradvocate.com/im/beers/87846.jpg",name:"King Julius", style:"American Double / Imperial IPA ", abv:8.3,ratings:[], averageRating:0},
  //   {img:"https://cdn.beeradvocate.com/im/beers/146770.jpg",name:"Very Hazy", style:"American Double / Imperial IPA ", abv:8.6,ratings:[], averageRating:0},
  //   {img:"https://cdn.beeradvocate.com/im/beers/21690.jpg",name:"Pliny The Younger", style:"American Double / Imperial IPA ", abv:10.0,ratings:[], averageRating:0}
	];


//   var test = "Im alive from the service"; 

//   beerService.addToMyCollection = function(beer){
//     // console.log(beers);
//   	var index = beerService.indexInMyCollection(beer);
//     return $http.post('/beers', beer)
//     .then(function(response) {
//             if(index < 0){
//                beerService.allBeers.push(response.data);
//             }
//     }, function(err) {
//       console.error(err)
//     });
//   }

//  beerService.addRatingToBeer = function (beer,rating) {
//     beer.ratings.push(rating);
//     var total = 0;
//     for (var i =0; i < beer.ratings.length ; i++) {
//       total += beer.ratings[i];
//     }
//     beer.averageRating = total / beer.ratings.length;
//     console.log(allBeers);
//   }


//   beerService.removeFromMyCollection = function(beerToRemove){
//   	beerService.allBeers.splice(beerService.indexInMyCollection(beerToRemove), 1);
//     return $http.delete('/beers/' + (beerToRemove._id))
//     .then(function(response) {
//        //beerService.allBeers.splice(response,1);
//     })
//   }

//   beerService.indexInMyCollection = function(beerToCheck){
//   	for(m in beerService.allBeers){
//   		var beer = beerService.allBeers[m];
//   		if(beerToCheck.name == beer.name){
//   			return m;
//   		}
//   	}
//   	return -1;
//   }

// beerService.sortByRating = function () {
//   allBeers.sort(function(a, b) {
//   return a.averageRating - b.averageRating;
//   });
// }

profileService.getProfiles = function () {
    return $http.get('/profiles')
    .then(function(response) {
      angular.copy(response.data, profileService.allProfiles);
    }, function(err) {
      console.error(err)
    });
}

  return profileService;
})