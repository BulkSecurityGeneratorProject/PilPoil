'use strict';

angular.module('pilpoilApp')
    .controller('MainController', function ($rootScope, $scope, Principal) {
		Principal.identity().then(function(account) {
            $scope.account = account;
            $scope.isAuthenticated = Principal.isAuthenticated;
            $rootScope.$broadcast('account');
        });
    });


