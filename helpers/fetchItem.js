const fetchItem = async (ItemID) => {
  try {
    const endPoint = `https://api.mercadolibre.com/items/${ItemID}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
    // console.log(data);
  } catch (error) {
    return error;
  }
};
fetchItem('MLB1341706310');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
