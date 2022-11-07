import { salariosTrabalhadores, descontosTrabalhadores } from '../index';

describe('Testa vai executar a Soma Salarios e descontos dos trabalhadores', () => {
  it('Soma Salarios Trabalhadores', () => {
    const esperado = 2500;
    const retornado = salariosTrabalhadores(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Descontos Trabalhadores', () => {
    const esperado = 2200;
    const retornado = descontosTrabalhadores(2500, 300);

    expect(retornado).toBe(esperado);
  });
});
