# gik2xk-grupp5-projekt

Design av webbapplikationer – Grupp 5

## About

A full-stack webshop application built as a group project for a web design course. Users can browse products, manage a shopping cart, leave ratings, and log in. Admins can manage products.

## Features

- Product listing and detail pages
- Shopping cart management
- User registration and login
- Product ratings and reviews
- Admin panel for managing products

## Tech Stack

| Layer    | Technology                                      |
|----------|-------------------------------------------------|
| Frontend | React 18, Material-UI, React Router, Bootstrap  |
| Backend  | Node.js, Express.js, Sequelize ORM              |
| Database | MySQL                                           |

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/SamirAh90/gik2xk-grupp5-projekt.git
cd gik2xk-grupp5-projekt
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

### 4. Run the app

In **two separate terminals**:

**Terminal 1 – Backend:**

```bash
cd backend
npm start
```

**Terminal 2 – Frontend:**

```bash
cd frontend
npm start
```

The app will be available at **http://localhost:3000**.

## Project Structure

```
gik2xk-grupp5-projekt/
├── backend/
│   ├── config/
│   │   └── db.js              # Database config (Sequelize)
│   ├── controllers/
│   │   ├── productRoutes.js   # Product API logic
│   │   └── userRoutes.js      # User auth logic
│   ├── models/
│   │   ├── Cart.js            # Cart model
│   │   ├── Product.js         # Product model
│   │   ├── Rating.js          # Rating model
│   │   └── User.js            # User model
│   ├── routes/
│   │   ├── cartRoutes.js      # Cart API endpoints
│   │   └── productRoutes.js   # Product API endpoints
│   ├── .env                   # Environment variables
│   ├── server.js              # Express entry point
│   └── setupDb.js             # DB setup & seeding
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.jsx            # Main app with routing
│       ├── index.js
│       └── components/
│           ├── Cart.jsx
│           ├── Footer.jsx
│           ├── Login.jsx
│           ├── ProductDetail.jsx
│           ├── ProductForm.jsx
│           ├── ProductList.jsx
│           ├── RatingForm.jsx
│           └── Register.jsx
└── README.md
```

## Environment Variables

The backend uses a `.env` file (already included in the repo):

```
DB_NAME=webshop_db
DB_USER=your_mysql_username
DB_PASS=your_mysql_password
DB_HOST=localhost
PORT=3305
```

## License

See [LICENSE](LICENSE) for details.
