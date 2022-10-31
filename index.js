const salariosTrabalhadores = (salario, horasExtras) => salario + horasExtras;
const descontosTrabalhadores = (salario, descontos) => salario - descontos;

// Função Simples para verificar

const verifiqueSe = (valor) => {
  const assercoes = {
    ehExatamenteIgualA(esperado) {
      if (valor !== esperado) {
        // eslint-disable-next-line no-throw-literal
        throw {};
      }
    },
  };
  return assercoes;
};

// para executar junto com a função Teste.

const teste = (titulo, funcaoDeTeste) => {
  try {
    funcaoDeTeste();
    console.log(`${titulo} passou!`);
  } catch (error) {
    console.error(`${titulo} não passou!!`);
  }
};

teste('salariosTrabalhadores', () => {
  const esperado = 2500;
  const retornado = salariosTrabalhadores(2000, 500);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});

teste('descontosTrabalhadores', () => {
  const esperado = 1800;
  const retornado = descontosTrabalhadores(2000, 200);
  verifiqueSe(retornado).ehExatamenteIgualA(esperado);
});
