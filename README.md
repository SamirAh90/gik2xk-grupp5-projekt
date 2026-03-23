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
│   ├── config/
│   │   └── db.js                  # Sequelize database connection
│   ├── controllers/
│   │   ├── productRoutes.js       # Product business logic (CRUD)
│   │   └── userRoutes.js          # User auth logic (login, register)
│   ├── models/
│   │   ├── Cart.js                # Cart & CartItem models
│   │   ├── Product.js             # Product model
│   │   ├── Rating.js              # Rating/Review model
│   │   └── User.js                # User/Admin model
│   ├── routes/
│   │   ├── cartRoutes.js          # Cart API endpoints
│   │   └── productRoutes.js       # Product API endpoints
│   ├── .env                       # Environment variables (DB credentials)
│   ├── package.json               # Backend dependencies & scripts
│   ├── server.js                  # Express server entry point
│   ├── setupDb.js                 # DB setup & data seeding
│   ├── sync.js                    # Sequelize sync script
│   └── webshop_db                 # Local SQLite DB (for dev/testing)
├── frontend/
│   ├── public/
│   │   └── index.html             # Main HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Cart.jsx           # Shopping cart view
│   │   │   ├── Footer.jsx         # Site footer
│   │   │   ├── Login.jsx          # Login page
│   │   │   ├── ProductDetail.jsx  # Product detail page
│   │   │   ├── ProductForm.jsx    # Add/Edit product form (admin)
│   │   │   ├── ProductList.jsx    # Product listing page
│   │   │   ├── RatingForm.jsx     # Submit a product rating
│   │   │   └── Register.jsx       # User registration page
│   │   ├── App.jsx                # Main app component & routing
│   │   ├── index.css              # Global styles
│   │   └── index.js               # React entry point
│   └── package.json               # Frontend dependencies & scripts
├── .gitignore
├── LICENSE
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

## 👤 Test Accounts

The following admin accounts are seeded automatically when you run `node setupDb.js`:

| Name    | Email           | Password | Role  |
|---------|-----------------|----------|-------|
| Ludwig  | ludwig@du.se    | lud123   | Admin |
| Hangama | hangama@du.se   | han123   | Admin |
| Samir   | samir@du.se     | sam123   | Admin |

> You can also register a new regular user account directly from the app's **Register** page.

---

## 📄 License

See [LICENSE](LICENSE) for details.


## Användande av AI 

I detta projekt har vi använt AI för att generera kommentarer på kod, tolka kravspecifikationen och hjälpa till att lösa komplexa problem.

Exempel:
Fråga: Vad är kundens kravspecifikation enligt bilagan (uppgiftsbeskrivningen)?
Svar: Här är en sammanfattning av kundens kravspecifikation för projektarbetet om webbshoppen, strukturerad och tydlig.

Följdfråga: Kan du formulera det från företagets perspektiv, där kunden ställer krav och vi som företag ska uppfylla dessa krav?

Svar: Absolut. Här är kravspecifikationen omformulerad så att den blir kundfokuserad, som om vårt företag har fått i uppdrag att leverera en webbshop till en kund. Den presenteras som en checklista med krav och förväntningar ur kundens perspektiv.

Ytterligare fråga: Kan du skriva och kommentera denna text så att den blir tydligare och mer korrekt?

Svar: AI hjälpte till att förbättra språket, göra kommenterana mer strukturerad och tydligare beskriva hur kraven ska förstås och uppfyllas.
