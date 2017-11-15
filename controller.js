(function(){
function testController(){
var vm = this;
vm.favFood = ["Grocery Shop", "Laundry" , "Get Gas" , "Vacuum"];
vm.removeFood = function(index){

vm.favFood.splice(index,1);

};
vm.addFood=function(index)
{
	console.log(index);
	vm.favFood.push(index);
};
};

angular
	.module("testModule")
	.controller("testController", testController);
})();