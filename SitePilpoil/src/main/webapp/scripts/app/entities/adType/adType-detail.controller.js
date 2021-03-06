'use strict';

angular.module('pilpoilApp')
    .controller('AdTypeDetailController', function ($scope, $rootScope, $stateParams, entity, AdType, Ad) {
        $scope.adType = entity;
        $scope.load = function (id) {
            AdType.get({id: id}, function(result) {
                $scope.adType = result;
            });
        };
        var unsubscribe = $rootScope.$on('pilpoilApp:adTypeUpdate', function(event, result) {
            $scope.adType = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });
