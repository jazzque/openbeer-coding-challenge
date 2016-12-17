class OpenBeerController {
  constructor($scope, Service) {
    this.$scope = $scope;
    this.Service = Service;
  }

  initialize(){
    this.isLoad = true;

    this.Service.get().$promise.then((response) => {
      this.$scope.beers = response.beers;
      this.$scope.breweries = response.breweries;
    });

    setTimeout(() => { this.isLoad = false; }, 400);
  }

  hasDescription(beer){
    return beer.descript != null;
  }

  find_beers(brewery_id){
    return this.$scope.brewery_beers = _.filter(this.$scope.beers, (beer) => {
      return beer.brewery_id == brewery_id;
    })
  }
}

OpenBeerController.$inject = ['$scope', 'OpeenbeerService'];

app.controller('OpenBeerController', OpenBeerController);
