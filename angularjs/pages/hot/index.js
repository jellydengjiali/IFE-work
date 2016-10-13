angular.module('app.hot', ['app.hot.service','app.hot.directive'])
        .controller('hot', function ($scope, getList) {
            $scope.msg = "hello hot";
            getList.get().then(function(data){
                $scope.list = data.list;

            },function(data){

            });

            $scope.boxData = {
              name: 'dorsy',
              comment:'this is a comment'
            };
            $scope.submit = function(){
              alert('submit');

              $scope.$emit('refresh','submited');
            };
        });
