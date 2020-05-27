import bookData from '../helpers/data/bookData.js';
import utils from '../helpers/utils.js';

const addToCartEvent = (e) => {
    console.log('You added it')
}

const makeStore = () => {
    const bookInfo = bookData.getBook();

    const domString = `
    <h2>Our One Book</h2>
    But now! It's only
    <h3 id="book-price">${bookInfo.price}</h3>
    <img src="${bookInfo.image}" alt="book cover">
    <button class="btn btn-danger" id="add-to-cart">Add To Cart</button>
    `;

    console.log(bookInfo);

    utils.printToDom('#store', domString);

    document.querySelector('#add-to-cart').addEventListener('click', addToCartEvent)
}

export default { makeStore };