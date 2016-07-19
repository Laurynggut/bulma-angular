function postDirective(){
	return{
		restrtict: "E",
		templateUrl:"views/post.html"
	};
};	

function headerDirective(){
	return{
		restrtict: "A",
		templateUrl:"views/header.html"
	};
};	


(function(){
angular.module('myApp.directives',[])
.directive('postDirective',postDirective)//cuidado no poner ;
.directive('headerDirective',headerDirective)

})();