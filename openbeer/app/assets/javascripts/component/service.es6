app.factory('OpeenbeerService', ['$resource', ($resource) =>
  $resource(
    '/api/beers',
    {},
    {
      get: {
        method: 'GET'
      }
    }
  )
]);
