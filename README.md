# 🛒 Grupp 5 – Webshop

> A modern, full-stack e-commerce application built with React and Node.js.  
> Browse products, manage your cart, rate your purchases, and more — all in one place.

---

## ✨ What is this?

This is a fully functional webshop application developed as a group project for the course **Design av webbapplikationer** at Dalarna University.

The app offers a seamless shopping experience with a clean, responsive interface powered by Material-UI. Behind the scenes, a RESTful Node.js API handles everything from product management to user authentication.

---

## 🚀 Key Features

- 🔍 **Browse products** – View all products with images, descriptions, and prices
- 🛒 **Shopping cart** – Add, remove, and manage items before checkout
- 👤 **User accounts** – Register and log in securely
- ⭐ **Ratings & reviews** – Leave feedback on products you've purchased
- 🔧 **Admin panel** – Admins can add, edit, and delete products

---

## 🧱 Tech Stack

| Layer    | Technology                                      |
|----------|-------------------------------------------------|
| Frontend | React 18, Material-UI, React Router, Bootstrap  |
| Backend  | Node.js, Express.js, Sequelize ORM              |
| Database | MySQL                                           |

---

## 🖥️ Getting Started

### Prerequisites

Make sure you have the following installed before you begin:

| Tool | Version | Download |
|------|---------|----------|
| **Node.js** | v18 or higher | [nodejs.org](https://nodejs.org) |
| **npm** | Comes with Node.js | – |
| **MySQL** | v8 or higher | [dev.mysql.com](https://dev.mysql.com/downloads/mysql/) |

> ⚠️ After installing MySQL, make sure the server is **running** and create a database called `webshop_db`.

---

### Installation

**1. Clone the repo**
```bash
git clone https://github.com/SamirAh90/gik2xk-grupp5-projekt.git
cd gik2xk-grupp5-projekt
```

**2. Install backend dependencies**
```bash
cd backend
npm install
```

**3. Install frontend dependencies**
```bash
cd ../frontend
npm install
```

---

### ▶️ Running the Application

Open **two separate terminals** and run:

**Terminal 1 – Backend (API server):**
```bash
cd backend
npm start
```

**Terminal 2 – Frontend (React app):**
```bash
cd frontend
npm start
```

🌐 The app will be available at **[http://localhost:3000](http://localhost:3000)**

> 💡 **Development tip:** Use `npm run dev` in the backend terminal for auto-restart on file changes.

---

## 📁 Project Structure

```
gik2xk-grupp5-projekt/
├── backend/
│   ├── config/db.js          # Database connection (Sequelize)
│   ├── controllers/          # Business logic for products & users
│   ├── models/               # Database models (Product, User, Cart, Rating)
│   ├── routes/               # API route definitions
│   ├── server.js             # Express server entry point
│   └── .env                  # Environment variables (DB config)
├── frontend/
│   └── src/
│       ├── App.jsx            # Main app & routing
│       └── components/        # All React UI components
└── README.md
```

---

## ⚙️ Environment Variables

The `backend/.env` file is already included. If you need to adjust your database settings:

```env
DB_NAME=webshop_db
DB_USER=your_mysql_username
DB_PASS=your_mysql_password
DB_HOST=localhost
PORT=3305
```

---

## 📄 License

See [LICENSE](LICENSE) for details.
