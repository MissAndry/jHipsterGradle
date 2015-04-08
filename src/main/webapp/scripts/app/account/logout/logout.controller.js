'use strict';

angular.module('jhipstergradleApp')
    .controller('LogoutController', function (Auth) {
        Auth.logout();
    });
