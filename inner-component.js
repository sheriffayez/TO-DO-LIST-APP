(function(){


var taskList = {
controller: "testController",
templateUrl: "inner-template.html"
}

angular
.module("myApp")
.component("taskList", taskList);
})();