(function(){
function testController(){
var vm = this;
vm.GroceryList = ["Grocery Shop", "Laundry" , "Get Gas" , "Vacuum"];
vm.remove = function(index){

vm.GroceryList.splice(index,1);

};
vm.add=function(index)
{
	
	vm.GroceryList.push(index);
};
};

angular
	.module("myApp")
	.controller("testController", testController);
})();