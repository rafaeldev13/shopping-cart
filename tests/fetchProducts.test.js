require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Testa se a função fetchProducts é uma função', async () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  it ('Testa se ao Executar a função fetchProducts com o argumento computador a fetch foi chamada', async () => {
    expect.assertions(1)
    await (fetchProducts('computador'));
    expect(fetch).toHaveBeenCalled();
  });

  it ('Testa se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {
    expect.assertions(1);
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await (fetchProducts('computador'));
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it ('Testa se ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url ', async () => {
    expect.assertions(1);
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
});
