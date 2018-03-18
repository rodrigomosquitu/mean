### FaleMais

A empresa de telefonia X, especializada em chamadas de longa distância nacional, vai
colocar um novo produto no mercado chamado FaleMais.
Normalmente um cliente X pode fazer uma chamada de uma cidade para outra pagando
uma tarifa fixa por minuto, com os preço sendo pré-definido em uma lista com os códigos DDDs de origem e destino:

Origem	Destino	$/min
011		016		1.90
016		011		2.90
011		017		1.70
017		011		2.70
011		018		0.90
018		011		1.90

Com o produto FaleMais, o cliente adquire um plano e pode falar de graça até um determinado tempo (em minutos) e só paga os minutos excedentes. Os minutos excedentes tem um acrescimo de 10% sobre a tarifa normal do minuto. Os planos são FaleMais 30 (30 minutos), FaleMais 60 (60 minutos) e FaleMais 120 (120 minutos).

O FaleMais permite que o cliente possa calcular o valor de cada ligação. O cliente pode escolher os códigos das cidades de origem e destino, o tempo da ligação em minutos e escolher qual o plano FaleMais. O sistema deve mostrar dois valores:

(1) o valor da ligação com o plano e (2) sem o plano.

### Como executar o projeto no ambiente de desenvolvimento

1. Você deve iniciar uma instância local do MongoDB 

2. Vá até o diretório raiz da aplicação

        $ cd falemais

3. Importe os dados de tarifas para o MongoDB

        $ mongorestore -d falemais dump/falemais/

4. Instale os módulos requeridos do Node.js 

        $ npm install

5. Inicie o Node.js HTTP server

        $ npm start

6. Visite o endereço [http://localhost:3000](http://localhost:3000)

7. Aproveite!

### Executando testes - Mocha 

        $ npm test

### Executando testes - Karma

        $ npm run test-karma

### Ferramentas

1) Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)

2) MEAN Stack — MongoDB, Express.js, AngularJS, and Node.js 

