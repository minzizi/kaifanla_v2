angular.module('kaifanla', ['ng', 'ngTouch']).
controller('parentCtrl', function ($scope) {
  console.log('parentCtrl对象的实例开始创建...');
  $scope.jump = function (url) {
    console.log('jump....')
    //不能使用ng提供的跳转，必须使用jQM的跳转方案
    $.mobile.changePage(url, {transition: 'slide'});
  }

  //监听jQM新Page挂载到DOM树开始初始化事件
  $('body').on('pageinit', function (event) {
    //console.log('新的Page被挂载到DOM树啦...');
    //console.log(event);
    //event.target就是刚被挂载进来的DOM片段
    //启用Angular的编译机制，编译一遍这个DOM片段
    var newPageScope = $(event.target).scope(); //获取新的代码片段对应的作用域对象
    $(event.target).injector().   /*获取Angular注入器*/
    invoke(function ($compile) {
      $compile($(event.target))(newPageScope); //重新编译DOM片段，并链接入其所需要的模型数据
      newPageScope.$digest();  //启动$digest队列的轮询
    });

  })
  console.log('parentCtrl对象的实例创建完成...');
}).
controller('startCtrl', function ($scope) {
  console.log('startCtrl对象的实例开始创建...');
  console.log('startCtrl对象的实例创建完成...');
}).
controller('mainCtrl', function ($scope) {
  console.log('mainCtrl对象的实例开始创建...');
  $scope.scoreList = [10, 30, 50, 70];
  console.log('mainCtrl对象的实例创建完成...');
}).
controller('detailCtrl', function ($scope) {

}).
controller('orderCtrl', function ($scope) {

}).
controller('myorderCtrl', function ($scope) {

})