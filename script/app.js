function serConfig($locationProvider,$routeProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when('/',{
		controller:'indexController',
		templateUrl:'./views/index.html',
		controllerAs:'index'
	})
	.when('/posts/:id',{
		controller: 'postController',
		templateUrl: './views/show.html',
		controllerAs: 'post'
	})
};

(function(){
var app = angular.module('myApp',['ngRoute', 'myApp.controllers','myApp.directives']);//ngroute carga 

app.config(['$locationProvider','$routeProvider', serConfig]);
})();



/*CRUD
index//trabaja con 
show// muestra un elemento
new("GET")//crea uno nuevo creo una ruta de newController, creo ruta via Get
create("POST")
Edit("GET")//
update('PUT/PATCH')
destroy('DELETE')*/
