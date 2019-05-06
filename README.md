# Validador de Cartão de Crédito
Esta biblioteca destina-se à validação de números de Cartões de Crédito.
Na versão atual é capaz de retornar se o número informado é valido ou não.

## Como instalar:

```
$  npm install card-validator-tmc
```

## Como utilizar:

Exemplo de retorno válido: 

```javascript
 const cardValidator = require('card-validator-tmc');
 console.log(cardValidator("5234.2152.4626.0328")); //true
```
Exemplo de retorno inválido: 

```javascript
 const cardValidator = require('card-validator-tmc');
 console.log(cardValidator("523421524626000329578")); //false
```  

## roadmap oficial do projeto*

### Versão 3.0.0

* README translated to english.

### Versão 2.0.0

* Correção de bugs.

### Versão 1.0.0 (released)

* Funcionalidades: validação do número do cartão de crédito;
* Tratamento para entrada de números, letras e caracteres especiais;