# gik2xk-grupp5-projekt.

Design av weppapplikationer

### Application Overview

This is a full-stack webshop application designed for e-commerce functionality. It consists of a backend API server and a frontend user interface, allowing users to browse products, manage a shopping cart, leave ratings, and handle user authentication. The app appears to be built as a group project for a web design course ("Design av weppapplikationer").

The application supports:

- Product listing and details
- Shopping cart management
- User login/authentication (with admin roles)
- Product ratings and reviews
- Admin functionality for managing products

### Technology Stack

#### Backend

- **Runtime**: Node.js
- **Framework**: Express.js (for building the REST API)
- **Database ORM**: Sequelize (Object-Relational Mapping for database interactions)
- **Database**: MySQL (with MySQL2 driver for connections)
- **Additional Libraries**:
  - `cors`: Enables Cross-Origin Resource Sharing for frontend-backend communication
  - `dotenv`: Loads environment variables from a `.env` file
- **Development Tools**:
  - `nodemon`: For automatic server restarts during development

#### Frontend

- **Framework**: React (version 18.2.0, using Create React App for setup)
- **Routing**: React Router DOM (for client-side navigation)
- **UI Libraries**:
  - Material-UI (@mui/material, @mui/icons-material): For modern UI components
  - Bootstrap (react-bootstrap): For responsive design and additional styling
  - React Icons: For iconography
- **HTTP Client**: Axios (for making API requests to the backend)
- **Build Tool**: React Scripts (included with Create React App for development, building, and testing)

#### Database

- **Type**: MySQL (relational database)
- **Connection**: Configured via Sequelize with environment variables
- **Models**:
  - Product (name, description, price, stock, imageUrl)
  - Agent (users/admins with email, name, password, role)
  - Cart and CartItem (for shopping cart functionality)
  - Rating (for product reviews)

### Dependencies

#### Backend Dependencies (from package.json)

- **Production**:
  - `cors`: ^2.8.5
  - `dotenv`: ^16.4.7
  - `express`: ^4.21.2
  - `mysql2`: ^3.13.0
  - `sequelize`: ^6.37.6
- **Development**:
  - `nodemon`: ^3.1.9

#### Frontend Dependencies (from package.json)

- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.0
- `@mui/icons-material`: ^5.10.0
- `@mui/material`: ^5.10.0
- `axios`: ^1.3.4
- `bootstrap`: ^5.3.3
- `react`: ^18.2.0
- `react-bootstrap`: ^2.10.9
- `react-dom`: ^18.2.0
- `react-icons`: ^5.5.0
- `react-router-dom`: ^6.3.0
- `react-scripts`: 5.0.1

### Infrastructure and Architecture

#### Application Structure

```
gik2xk-grupp5-projekt/
├── backend/
│   ├── config/
│   │   └── db.js              # Database configuration (Sequelize setup)
│   ├── controllers/
│   │   ├── productRoutes.js   # Product-related API logic
│   │   └── userRoutes.js      # User authentication logic
│   ├── models/
│   │   ├── Agent.js           # User/Admin model
│   │   ├── Cart.js            # Shopping cart models
│   │   ├── Product.js         # Product model
│   │   └── Rating.js          # Rating/Review model
│   ├── routes/
│   │   ├── cartRoutes.js      # Cart API endpoints
│   │   └── productRoutes.js   # Product API endpoints
│   ├── .env                   # Environment variables (database credentials)
│   ├── package.json           # Backend dependencies and scripts
│   ├── server.js              # Main Express server file
│   ├── sync.js                # Database synchronization and seeding script
│   └── webshop_db             # SQLite database file (possibly for local testing)
├── frontend/
│   ├── public/
│   │   └── index.html         # Main HTML template
│   ├── src/
│   │   ├── App.js             # Main React component with routing
│   │   ├── index.js           # React app entry point
│   │   └── components/
│   │       ├── Cart.js        # Shopping cart component
│   │       ├── Login.js       # User login component
│   │       ├── ProductDetail.js # Product details view
│   │       ├── ProductForm.js # Product creation/editing form
│   │       ├── ProductList.js # Product listing component
│   │       └── RatingForm.js  # Rating submission form
│   └── package.json           # Frontend dependencies and scripts
├── LICENSE
└── README.md                  # Project documentation
```

#### API Endpoints

- `/products`: Product CRUD operations
- `/cart`: Shopping cart operations
- users: User authentication and management
- `/`: Health check endpoint

#### Database Schema

- **Products Table**: Stores product information
- **Agents Table**: Stores user/admin accounts (seeded with default admins)
- **Carts/CartItems Tables**: Manages shopping cart data
- **Ratings Table**: Stores product reviews

#### Environment Configuration

The backend uses environment variables for database configuration:

- `DB_NAME`: Database name
- `DB_USER`: Database username
- `DB_PASS`: Database password
- `DB_HOST`: Database host
- `PORT`: Server port (defaults to 3305)

### How to Run the Application

#### 1. Clone the repo

```bash
git clone https://github.com/SamirAh90/gik2xk-grupp5-projekt.git
cd gik2xk-grupp5-projekt
```

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

#### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

#### 4. Run the app

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
