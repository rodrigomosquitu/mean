//----------------------------------------------
// Teste unitário - Karma
// Verifica se o valor da ligação sem o plano FaleMais está correta
//----------------------------------------------
describe('AngularJSController', function() {

	beforeEach(module('falemais'));

	var rootScope;
	var $controller;

	beforeEach(inject(function(_$controller_, $rootScope) {
		$controller = _$controller_;
		rootScope = $rootScope;
	}));

	describe('falemais-controller', function() {

		it('Verifica se o valor da ligação sem o plano FaleMais está correta',
				function() {

					var $scope;
			
					$scope = rootScope.$new();
					$scope.ligacao = rootScope.$new();

					var controller = $controller('falemais-controller', {
						$scope : $scope
					});
					
					$scope.ligacao.origem = '011';
					$scope.ligacao.destino = '016';
					$scope.ligacao.tempo = '20';
					$scope.ligacao.plano = 'FaleMais 30';

					$scope.submitForm();
					
					expect($scope.ligacao.semFaleMais).toEqual('$ 38,00');
				});
	});

});