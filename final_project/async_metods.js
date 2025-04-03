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
  
  // Usage:
  getBookByISBNPromise("2")
    .then(book => console.log("Book by ISBN with Promise:\n", book))
    .catch(err => console.error(err));
  