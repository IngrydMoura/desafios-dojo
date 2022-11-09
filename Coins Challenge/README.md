# Primeiro DOJO do FX Team.do

## Data - 23/11/2022

## Estilo: Randori

## Responsável(eis): IngrydMoura e pedrobslisboa

## Timeout: 8 minutos.

## Desafio:

Ruanzinho detesta moedas. Justamente por isso odeia contá-las. Quanto menos moedas ele tiver, mais feliz estará. 

Faça um programa que pague, um dado valor a partir das moedas que Ruanzinho tem, e sobre a menor quantidade possível de moedas. Seu programa deve contabilizar as moedas de troco, caso haja, supondo que o troco será retornado com a menor quantidade possível de moedas. 

--- 

### Exemplo 1: 

moedas: R$ 0,05 = 27 R$ 0,10 = 19 R$ 0,25 = 13 R$ 0,50 = 2 R$ 1,00 = 4 

total de moedas: 65. 

valor: R$ 0,75 

15 moedas de R$ 0,05 serão usadas para pagar R$ 0,75, sobrarão 50 moedas. 

---
### Exemplo 2: 

moedas: R$ 0,50 = 2 R$ 1,00 = 1 

total de moedas: 3 

valor: R$ 0,95 

2 moedas de R$ 0,50 serão usadas para pagar R$ 0,95, terá uma moeda de R$ 0,05 de troco, totalizando 2 moedas.

----------------------

Para facilitar já foi entregue um arquivo para desenvolver a solução em conjunto a um teste que valida os exemplos acima. 

A função receberá 2 argumentos:
1: Um array de tuplas, tendo como primeiro item a quantidade de moedas de um valor e o segundo o valor dessas moedas. Esse argumento representa todas as moedas que Ruanzinho tem.
2: O valor a ser gasto com as moedas.

E esta retorna um array de tuplas, tendo como primeiro item a quantidade de moedas de um valor e o segundo o valor dessas moedas. Representando o resultados das moedas restantes após o uso delas.











