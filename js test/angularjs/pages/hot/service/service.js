angular.module('app.hot.service', [])
        .service('getList', function($http,$q){
          return{
            get: function () {
                  var defer = $q.defer();
                  $http({url : 'cgi/list.json', method: 'POST', data: {a: 1}}).success(function (data) {
                    defer.resolve(data);
                  })
                  .error(function (data) {
                      defer.reject(data);
                  });

                  return defer.promise;
            }
          }
        })
