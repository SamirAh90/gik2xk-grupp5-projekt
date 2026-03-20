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

#### Prerequisites

1. **Node.js**: Ensure Node.js (version compatible with the dependencies) is installed
2. **MySQL Server**: A MySQL database server must be running (local or remote)
3. **npm**: Node Package Manager (comes with Node.js)

#### Setup Steps

1. **Clone/Download the Project**:
   - Navigate to the project directory: `c:\Users\samma\Desktop\WEB DESIGN PROJEKT\gik2xk-grupp5-projekt`

2. **Set Up the Database**:
   - Create a MySQL database with the name specified in your `.env` file (e.g., `webshop_db`)
   - Ensure MySQL server is running on the configured host and port (default: localhost:3306)

3. **Configure Environment Variables**:
   - In .env, set the database credentials:
     ```
     DB_NAME=your_database_name
     DB_USER=your_mysql_username
     DB_PASS=your_mysql_password
     DB_HOST=localhost
     PORT=3305
     ```

4. **Install Backend Dependencies**:
   - Open a terminal in the backend directory
   - Run: `npm install`

5. **Set Up the Database Schema**:
   - In the backend directory, run: `node sync.js`
   - This will create the database tables and seed default admin accounts

6. **Start the Backend Server**:
   - In the backend directory, run: `npm start` (for production) or `npm run dev` (for development with auto-restart)
   - The server will start on port 3305 (or the port specified in `.env`)

7. **Install Frontend Dependencies**:
   - Open a new terminal in the frontend directory
   - Run: `npm install`

8. **Start the Frontend Application**:
   - In the frontend directory, run: `npm start`
   - The React app will start on port 3000 (default Create React App port)
   - Open `http://localhost:3000` in your browser

#### Running in Development Mode

- Backend: Use `npm run dev` for automatic restarts on file changes
- Frontend: `npm start` automatically reloads on changes

#### Building for Production

- Frontend: Run `npm run build` in the frontend directory to create a production build
- Backend: The backend is ready for production as-is, but consider using a process manager like PM2

#### Testing

- Frontend: Run `npm test` in the frontend directory for React testing

### Additional Notes

- The application uses localStorage for user session management on the frontend
- Default admin accounts are seeded during database sync (emails: AdminUbah@wb.se, adminIlhan@wb.se, adminAbdi@wb.se with password: admin123)
- The `webshop_db` file in the backend appears to be a SQLite database, possibly for local testing or backup
- No Docker or containerization setup is included in the current infrastructure
- The app assumes a local development environment; for deployment, additional configuration for production databases and hosting would be needed

This setup provides a complete development environment for the webshop application. For production deployment, consider using services like Heroku, AWS, or similar for hosting both the frontend (static files) and backend (Node.js server), along with a managed MySQL database.
