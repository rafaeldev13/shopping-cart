const fetchProducts = async (computador) => {
  try {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;

    const response = await fetch(endPoint);
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
