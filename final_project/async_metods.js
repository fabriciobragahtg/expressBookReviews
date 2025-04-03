const getAllBooksCallback = (callback) => {
    setTimeout(() => {
        const books = require('./router/booksdb.js');
        callback(null, books);
    }, 1000); // simulate async operation
};


const getBookByISBNPromise = (isbn) => {
    const books = require('./router/booksdb.js');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const book = books[isbn];
            if (book) resolve(book);
            else reject("Book not found");
        }, 1000);
    });
};


const getBooksByAuthorAsync = async (author) => {
    const books = require('./router/booksdb.js');

    return new Promise((resolve) => {
        setTimeout(() => {
            const result = Object.values(books).filter(b =>
                b.author.toLowerCase().includes(author.toLowerCase())
            );
            resolve(result);
        }, 1000);
    });
};

const getBooksByTitleAsync = async (title) => {
    const books = require('./router/booksdb.js');
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = Object.values(books).filter(b =>
          b.title.toLowerCase().includes(title.toLowerCase())
        );
        resolve(result);
      }, 1000);
    });
  };
  
  