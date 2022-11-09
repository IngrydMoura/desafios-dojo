// DO NOT EDIT OR REMOVE THIS FILE.

const challenge = require("./solution.js");

describe('Coins Challenge', () => {
  it('should handle without change', () => {
    /**
        Exemplo 1: 

        moedas: R$ 0,05 = 27 R$ 0,10 = 19 R$ 0,25 = 13 R$ 0,50 = 2 R$ 1,00 = 4 

        total de moedas: 65. 

        valor: R$ 0,75 

        15 moedas de R$ 0,05 serão usadas para pagar R$ 0,75, sobrarão 50 moedas. 
     */
    const coins = challenge([[27, 0.5], [19, 0.10], [13, 0.25], [2, 0.50], [4, 1.00]], 0.75)
    
    expect(coins).toEqual(expect.arrayContaining([[12, 0.5], [19, 0.10], [13, 0.25], [2, 0.50], [4, 1.00]]))
    expect(coins.reduce((acc, cur) => acc = acc + cur[0], 0)).toEqual(50);
  })

  it('should handle with change', () => {
    /**
        Exemplo 2: 

        moedas: R$ 0,50 = 2 R$ 1,00 = 1 

        total de moedas: 3 

        valor: R$ 0,95 

        2 moedas de R$ 0,50 serão usadas para pagar R$ 0,95, terá uma moeda de R$ 0,05 de troco, totalizando 2 moedas.
     */
    const coins = challenge([[2, 0.50], [1, 1.00]], 0.95);
    
    expect(coins).toEqual(expect.arrayContaining([[1, 0.05], [1, 1]]))
    expect(coins.reduce((acc, cur) => acc = acc + cur[0], 0)).toEqual(2)
  })
});