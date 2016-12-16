class OpenBeerController {
  constructor($scope, Service) {
    this.$scope = $scope;
    this.Service = Service;
  }

  initialize(){
    this.Service.get(this.params).$promise.then((response) => {
      this.$scope.beers = response.beers;
      this.$scope.breweries = response.breweries;
    });
    this.$scope.isLoad = false;
  }
}

OpenBeerController.$inject = ['$scope', 'OpeenbeerService'];

app.controller('OpenBeerController', OpenBeerController);
