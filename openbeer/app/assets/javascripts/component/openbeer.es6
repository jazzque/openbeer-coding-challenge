app.directive('openbeer', [
  function () {
    return {
      restrict: 'E',
      controller: 'OpenBeerController',
      controllerAs: 'vm',
      templateUrl: 'component/openbeer_template.html'
    }
  }
]);
