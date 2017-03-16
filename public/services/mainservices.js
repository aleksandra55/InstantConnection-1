app.service('profileService', function($http){
  var profileService = new Object();
  profileService.allProfiles =  [
{
"_id": "58c7c7850e8c263fd81926aa",
"name": "Brandon Bledsoe",
"job": "Plumber",
"image_url": "https://preview.ibb.co/mwXebF/MG_1186.jpg",
"description": "Ex Navy Seal, Currently saving kittens to build a better world",
"linkedin_url": "https://www.linkedin.com/in/brandon-bledsoe-b2171099/",
"__v": 0
},
{
"_id": "58c7c8df0e8c263fd81926ab",
"name": "Aaron Weiss",
"job": "web developper",
"image_url": "https://image.ibb.co/cNd7Va/MG_1309.jpg",
"description": "Always here if you need me !",
"linkedin_url": "",
"__v": 0,
"mailLink": "gabmimouni@gmail.com"
},
{
"_id": "58c7ca6d0e8c263fd81926ac",
"name": "Hadas Shamir",
"job": "Dancer",
"image_url": "https://preview.ibb.co/dbNO3v/MG_1376.jpg",
"description": "The dancing queen",
"linkedin_url": "https://www.linkedin.com/in/hadas-shamir-92957348/",
"__v": 0
},
{
"_id": "58c7cc100e8c263fd81926ad",
"name": "Steven Winston",
"job": "Web Developper",
"image_url": "https://preview.ibb.co/mFtViv/MG_1575.jpg",
"description": "Scottish kitten lover",
"linkedin_url": "https://www.linkedin.com/in/stevenwinston/",
"__v": 0
},
{
"_id": "58c7ce090e8c263fd81926ae",
"name": "Arik Aviv",
"job": "Web Developper",
"image_url": "https://preview.ibb.co/e871qa/MG_1247.jpg",
"description": "The coding master",
"linkedin_url": "https://www.linkedin.com/in/arik-aviv-54b096139/",
"__v": 0
},
{
"_id": "58c7feccb109452680f782f5",
"name": "Mati Borlak",
"job": "Web Developper",
"image_url": "https://image.ibb.co/mCjgqa/MG_1297.jpg",
"description": "JavaScript genius",
"linkedin_url": "https://www.linkedin.com/in/mati-borlak-1b9247135/",
"__v": 0
},
{
"_id": "58c8000bb109452680f782f6",
"name": "Nate Chesley",
"job": "Architect",
"image_url": "https://image.ibb.co/jHXqiv/MG_1298.jpg",
"description": "I'm really good at what I do, and I look like Ryan Gosling",
"linkedin_url": "https://www.linkedin.com/in/nate-chesley-9a366a5/",
"__v": 0
}
]


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
