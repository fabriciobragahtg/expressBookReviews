# 📚 Book Review API - Final Project (Node + Express + JWT)

This project is a backend API for managing an online bookstore's reviews. It includes public endpoints, JWT-based authentication, and protected user review operations.

---

## 🚀 Features

### General Users:
- ✅ Get full list of books
- ✅ Search books by ISBN, Author, or Title
- ✅ Get reviews for a book
- ✅ Register a new account
- ✅ Login with JWT

### Registered Users:
- ✅ Add or update a book review
- ✅ Delete your own review

---

## 🔒 Authentication

- Protected routes use JWT stored in the session.
- Sessions are managed with `express-session`.

---

## 🧪 Async Function Demos

Implemented in `async_methods.js`:
- ✅ Task 10: Get all books (callback)
- ✅ Task 11: Search by ISBN (promise)
- ✅ Task 12: Search by Author (async/await)
- ✅ Task 13: Search by Title (async/await)

---

## 📦 Installation

```bash
git clone https://github.com/fabriciobragahtg/expressBookReviews.git
cd book-review-api
npm install
node index.js
