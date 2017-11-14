var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ["$scope", "svTodos", function ($scope, svTodos) {
    $scope.appName = "Todo Dashboard";
    $scope.loading = true;
    // $scope.todos = [{
    //     text: "Khoi tao du an, include thu vien bootstrap, fontawesome, angularjs",
    //     isDone: true
    // }, {
    //     text: "Cai dat AngularJs App, controller, khoi tao du lieu ban dau",
    //     isDone: true
    // }, {
    //     text: "Tao service goi api, binding du lieu, action",
    //     isDone: false
    // }, {
    //     text: "Hoan thanh ung dung, deploy len heroku ...",
    //     isDone: false
    // }];

    $scope.todos = [];

    //load data from api
    svTodos.get().then(function (response) {
        $scope.todos = response.data;
        $scope.loading = false;
    });

    $scope.formData = {};

    $scope.createTodo = function () {
        $scope.loading = true;
        var todo = {
            text: $scope.formData.text,
            isDone: false
        };

        svTodos.create(todo).then(function (response) {
            $scope.todos = response.data;
            $scope.formData.text = "";
            $scope.loading = false;

        });
        // $scope.todos.push(todo);
    };

    $scope.deleteTodo = function (todo) {
        console.log("Delete todo: ", todo);
        $scope.loading = true;
        svTodos.delete(todo._id).then(function (response) {
            $scope.todos = response.data;
            $scope.loading = false;
        });
    };

    $scope.updateTodo = function (todo) {
        console.log("Update todo: ", todo);
        $scope.loading = true;
        svTodos.update(todo).then(function (response) {
            $scope.todos = response.data;
            $scope.loading = false;
        });
    };
}]);