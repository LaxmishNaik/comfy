import { getElement } from '../utils.js';
import displayProducts from '../displayProducts.js';
import { store } from '../store.js';

const setupSearch = (sotre) => {
  const form = getElement('.input-form');
  const nameInput = getElement('.search-input');
  form.addEventListener('keyup', function () {
    const value = nameInput.value;
    // console.log(value);
    if (value) {
      const newStore = store.filter((product) => {
        let { name } = product;
        // console.log(name);
        name = name.toLowerCase();
        if (name.startsWith(value)) return product;
      });
      //   console.log(newStore);
      displayProducts(newStore, getElement('.products-container'), true);
      if (newStore < 1) {
        const products = getElement('.products-container');
        products.innerHTML = `<h3 class="filter-error">sorry, no products matched your search</h3>`;
      }
    } else {
      displayProducts(store, getElement('.products-container'), true);
    }
  });
};

export default setupSearch;
