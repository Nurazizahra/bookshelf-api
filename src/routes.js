const {
  savingBookHandler, showAllBooksHandler, displayBookByIdHandler,
  editBookByIdHandler, deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: savingBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: showAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: displayBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
