let g_BooksCount = 0;
const library = document.querySelector('.library');
const modal = document.querySelector('.modal');
const addbkBtn = document.querySelector('#add-book');
const addBtn = document.querySelector('#addtocol');
const bookinput = document.querySelector('#booktext');
const authorinput = document.querySelector('#authortext');
const pagesinput = document.querySelector('#pagestext');
const alertP = document.querySelector('.alert');

let Book = function(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

Book.prototype.createBookCard = function(){
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    const titleofBook = document.createElement('h3');
    titleofBook.textContent = this.title;
    const auth = document.createElement('p');
    auth.textContent = `By ${this.author}`;
    const pages = document.createElement('p');
    pages.textContent = `pages: ${this.pages}`;
    const removeButton = document.createElement('button')
    removeButton.textContent = 'Remove Book';
    library.appendChild(bookCard);
    bookCard.appendChild(titleofBook);
    bookCard.appendChild(auth);
    bookCard.appendChild(pages);
    bookCard.appendChild(removeButton);
    

    removeButton.addEventListener('click', () =>{
        library.removeChild(bookCard);
        g_BooksCount--;
        updateBooksCount();
    })
}

const updateBooksCount = () => {
    document.querySelector('#bookscount').textContent = `Total books: ${g_BooksCount}`;
}

const isEmpty = element => element.value == '';

/** Event Listeners */
addbkBtn.addEventListener('click', () =>{
    modal.style.display = 'block';
});

addBtn.addEventListener('click', () =>{
    if (isEmpty(bookinput) || 
    isEmpty(authorinput) || isEmpty(pagesinput)){
        alertP.textContent = 'Please supply all fields.';
    }
    else {
        const bookToBeAdded = new Book(bookinput.value, authorinput.value, pagesinput.value);
        bookToBeAdded.createBookCard();
        g_BooksCount++; updateBooksCount();
        alertP.textContent = '';
        modal.style.display = 'none';

    };
});

function init(){
    updateBooksCount();
}

init();
