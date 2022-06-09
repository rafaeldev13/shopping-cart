const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const cartItemClickListener = (event) => {
  event.target.remove();
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const productCart = {};
const ol = document.querySelector('.cart__items');
const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const createProductItemElement = ({ id: sku, title: name, thumbnail: image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  // Depois da mentoria do dia 8 de junho, analisei meu código o addEventListener dentro desta funcão.
  section.addEventListener('click', async () => {
    const idByProduct = await fetchItem(sku);
    productCart.sku = idByProduct.id;
    productCart.name = idByProduct.title;
    productCart.salePrice = idByProduct.price;
    ol.appendChild(createCartItemElement(productCart));
  });
  return section;
};

async function getProducts() {
  const data1 = await fetchProducts('computador');
  const products = data1.results;
  const items = document.querySelector('.items');
  products.forEach((entry) => {
    items.appendChild(createProductItemElement(entry));
  });
  // console.log(products);
}
getProducts();

const clearCart = document.querySelector('.empty-cart');
      clearCart.addEventListener('click', () => {
        ol.innerHTML = '';
        localStorage.clear();
      });

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

window.onload = () => {
};