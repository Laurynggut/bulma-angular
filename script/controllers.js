function indexController(Post){// var indexController = function($scope).... Es lo mismo. Estp lo teniamos en app.
	this.posts;
	var self = this; //almaceno la referencia en una variable,es decir,  self = indexController, self (that)convencion de concepto
	Post.query().$promise.then(function(response){
		self.posts = response;
	});
	//$http.get(url).then(function(res){$scope})
};

function postController($routeParams,Post){
	this.post;
	var self = this;
	Post.get({id: $routeParams.id}).$promise.then(function(response){
	self.post = response;
})
};
(function(){
angular.module('myApp.controllers',['myApp.services'])
.controller('indexController',indexController)// antes teniamos app.controller lo quitamos y lo dejamos a secas
.controller('postController', postController)
})();