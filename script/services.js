(function(){// se construye un servicio k keremos aprovechar
	angular.module('myApp.services',['ngResource'])
	.constant('BaseUrl', 'http://jsonplaceholder.typicode.com/')//definimos una constante, json de prueba en este caso
	.factory('Post',Post);//calBack de post es post


	function Post($resource,BaseUrl){//nos permite pillar datos de esta url
		return $resource(BaseUrl + 'posts/:id', {id:'@id'})
	};
})();