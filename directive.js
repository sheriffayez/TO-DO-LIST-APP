(function(){

function listDirective() {
return {
restrict: "A",

// replace: true,

link: function($scope, $element, $attrs) {
$element.on("mouseenter", function() {
$element.css("background-color", "grey");

});



$element.on("mouseleave", function() {
$element.css("background-color", "white");

});
}
};
}

angular
.module("myApp")
.directive("listDirective", listDirective)

})();