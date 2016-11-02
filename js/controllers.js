angular.module('starter.controllers', [])

.controller('IntroCtrl', function($scope, $http, $state) {
	
	$scope.setLanguage = function(lng) {
        
		currentLang = lng;
		
		$http({ url: webserviceURL + "setlanguage", method : "GET", params: {lng: lng} })
			.then(function(response) {
				$state.go("index.search");
			}, function(response) {
				alertProblem();
			});
    };
	
})
.controller('IndexCtrl', function($scope, $ionicSideMenuDelegate, $http, $state, $stateParams, Language) {
		
	$scope.$on('$ionicView.enter', function() {
        $scope.language = Language.all();
		$scope.currentLang = currentLang;
    });
	
	$scope.showRightmenu = function() {
		$ionicSideMenuDelegate.toggleRight();
	};
	  
	$scope.showLeftmenu = function() {
		$ionicSideMenuDelegate.toggleLeft();
	};
	
	$scope.closeSideBar = function() {
		$ionicSideMenuDelegate.toggleLeft(false);
		$ionicSideMenuDelegate.toggleRight(false);
	};
	  
		
		$http({url: webserviceURL + "searchinputs", method: 'GET'})
			.then(function(response) {
				$scope.restcats = response.data["restcats"];
				$scope.restcities = response.data["restcities"];
				$scope.restregions = response.data["restregions"];
				$scope.restaurantsList = response.data["restaurantsList"];
			}, function(response) {
				alertProblem();
			});
	
	
	$scope.searchRests = function( filter ){
		
		$ionicSideMenuDelegate.toggleLeft( false );
		$ionicSideMenuDelegate.toggleRight( false );
		
		$http({url: webserviceURL + "searchinputs", method: 'GET', params: { city: filter.city, dish: filter.dish, category: filter.category, state: filter.state }})
			.then(function(response) {
				$scope.restcats = response.data["restcats"];
				$scope.restcities = response.data["restcities"];
				$scope.restregions = response.data["restregions"];
				$scope.restaurantsList = response.data["restaurantsList"];
				
				$state.go('index.search');
			}, function(response) {
				alertProblem();
			});
		
	};
	
	$scope.langChange = function(lang){
		
		currentLang = lang;
		$scope.currentLang = lang;
		
	};
	
})

.controller('RestaurantCtrl', function($scope, $stateParams, $http) {
	
	$http({url: webserviceURL + "restaurant", method: 'GET', params: { id: $stateParams.restaurantId }})
			.then(function(response) {
				$scope.restaurant = response.data;
			}, function(response) {
				alertProblem();
			});
	
})

.controller('SettingsCtrl', function($scope) {
	
	$scope.lang = currentLang;
	
})

.controller('ProfileCtrl', function($scope) {})

.controller('CartCtrl', function($scope) {})

.controller('SearchCtrl', function($scope) {})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
