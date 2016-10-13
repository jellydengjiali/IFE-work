angular.module('app.hot.directive', [])
        .directive('commentbox', function () {
          return{
            restrict: 'EA',
            scope:{
                  boxData: "=",
                  onSubmit: '='
            },
            templateUrl: 'pages/hot/directive/commentbox.html',
            link: function (scope, element) {

            }
          };

        });
