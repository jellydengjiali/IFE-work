angular.module('app',['ngRoute', 'app.hot'])
        .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
          //这里要服务器支持
          $locationProvider.html5Mode = true;

          $routeProvider
                  .when('/hot',{templateUrl: 'pages/hot/index.html', controller: 'hot'})
                  //.otherwise({templaterUrl: 'template/home/index.html', controller: 'barinfo'});
        }])
       .controller('main',function($scope, $location){
            $scope.msg="hello world";

            $scope.navList = [
              {
                name: "今日最热",
                id: "hot",
                isHidden: 0
              },
              {
                name: "最新评论",
                id: "comment",
                isHidden: 0
              },
              {
                name: "发现文章",
                id: "artical",
                isHidden: 0
              }
            ];

            $scope.currNav;
            $scope.go = function(item){
              $scope.currNav = item;

              $location.path(item.id);
            };
            $scope.$on('refresh', function (event,data) {
                    alert(data);
            })
       });
