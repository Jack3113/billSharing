'use strict';

angular.module('app.controller.bill', ['app'])

.controller('billController', function($scope, $cookies, $location, User, Bill) {


       // Get logged user
    $scope.user = $cookies.getObject('user');
    if ($cookies.getObject('user'))
        $scope.user = $cookies.getObject('user');
    else
        $location.path("/login").replace();

    // Get user groups
    User.getGroupsByUserId($scope.user._id).success(function (data) {
        $scope.groups = data;
    }).error(function (data) {
        console.log('Error: ' + data);
    });


    $scope.getAll = function() {
        Bill.getAll().success(function(data) {
                $scope.bills = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

    $scope.get = function(id) {
        Bill.get(id).success(function(data) {
                $scope.bill = data;
            })
            .error(function(data) {
                console.log('Error: ' + JSON.stringify(data));
            });
    }

    $scope.add = function(bill) {
        Bill.add(bill).success(function(data) {
                $scope.response = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.edit = function(bill) {
        Bill.edit(bill).success(function(data) {
                $scope.response = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    $scope.delete = function(id) {
        Bill.delete(id).success(function(data) {
                $scope.response = data;
                console.log("Deleted bill with id : " + id);
            })
            .error(function(data) {
                console.log('Fail to delete bill with id : ' + id + '. Error : ' + data);
            });
    };

});