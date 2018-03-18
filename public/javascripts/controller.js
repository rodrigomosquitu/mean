//----------------------------------------------
// Controle do Angular 
//----------------------------------------------
(function () {

  var app = angular.module('falemais', []);
  
  app.controller('falemais-controller', ['$scope', '$http', function($scope, $http) {
	  
	  //----------------------------------------------------------
	  // Retorna a lista de todas as ligações cadastradas no banco
	  //----------------------------------------------------------
	  $scope.listaLigacoes = function () {
    	
	      $http.get('/falemais/ligacoes').then(function (data) {
		    	
			    console.log('Listando ligações...');
		
		        if (Array.isArray(data.data)) {
			        $scope.ligacoes = data.data;
			     } else {
			        $scope.ligacoes = [];
			     }
		  });
  	  };
  	  
	  //----------------------------------------------------------
  	  // Permite cadastrar em banco um cáculo de uma nova ligação
	  //----------------------------------------------------------
      $scope.submitForm = function () {	

	      $http.post('/falemais/addligacao', $scope.ligacao).success(function(){
	          $scope.listaLigacoes();
	      });
      };
  }]);
})();