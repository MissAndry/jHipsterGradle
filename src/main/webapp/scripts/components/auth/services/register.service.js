'use strict';

angular.module('jhipstergradleApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


