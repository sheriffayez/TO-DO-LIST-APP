(function(){


var taskForm = {
controller: "testController",
templateUrl: "outter-template.html"
}

angular
.module("myApp")
.component("taskForm", taskForm);
})();