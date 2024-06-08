<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Prosys - Comprehensive System for SOMOS RETENES

Prosys is a robust and efficient management system designed specifically for SOMOS RETENES. It facilitates seamless management of products, orders, and customers, offering a complete solution for all business needs. Prosys is intuitive to use and packed with powerful functionalities that simplify inventory management, streamline order tracking, and optimize customer interaction. This README provides a detailed overview of the project, including setup instructions, available endpoints, and more.

## Project Description

Prosys is the final project for the Software Programming course at Universidad Pontificia Bolivariana, developed by:

- Samuel Vera Miranda
- Juan Esteban Alcaraz

This project showcases our ability to create a full-fledged management system using modern web technologies.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **MySQL**: A relational database management system used to store and manage the application's data.

## Dependencies

- **@nestjs/common**: Essential NestJS utilities and classes.
- **@nestjs/config**: Module to manage application configuration.
- **@nestjs/core**: Core NestJS package.
- **@nestjs/jwt**: JSON Web Token utilities for NestJS.
- **@nestjs/passport**: Passport.js utilities for NestJS.
- **@nestjs/platform-express**: Express platform adapter for NestJS.
- **@nestjs/swagger**: Swagger module for API documentation.
- **@nestjs/typeorm**: TypeORM integration for NestJS.
- **bcrypt**: Library for hashing passwords.
- **mysql2**: MySQL client for Node.js.
- **passport-jwt**: Passport strategy for authenticating with JWT.
- **reflect-metadata**: Library that adds a Reflect API.
- **rxjs**: Reactive extensions for JavaScript.
- **typeorm**: ORM for TypeScript and JavaScript.

## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- MySQL (v8.x or higher)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/prosys.git
    cd prosys
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory with the following content:
    ```bash
    #* DB CONNECTION
    HOST=your-database-host
    PORT=your-database-port
    USERNAME=your-database-username
    PASSWORD=your-database-password
    DATABASE=your-database-name

    #* JWT SECRET
    JWT_SECRET=your-jwt-secret
    ACCESS_TOKEN_EXPIRY=1d
    ```

4. Run the application:
    ```sh
    npm run start
    ```

### API Endpoints

#### User Endpoints

- **Create User**: POST `/user/create`
- **Find User by Email**: GET `/user/find/email/:email`
- **Find User by Name**: GET `/user/find/name/:name`
- **Get All Users**: GET `/user/all`
- **Update User**: PUT `/user/update/:id`
- **Delete User**: DELETE `/user/delete/:id`

#### Auth Endpoints

- **Login**: POST `/auth/login`
- **Register**: POST `/auth/register`
- **Logout**: POST `/auth/logout`

#### Product Endpoints

- **Create Product**: POST `/product/create`
- **Get All Products**: GET `/product/all`
- **Find Product by Name**: GET `/product/find/:name`
- **Update Product**: PUT `/product/update/:id`
- **Delete Product**: DELETE `/product/delete/:id`

#### Order Endpoints

- **Create Order**: POST `/order/create`
- **Get All Orders**: GET `/order/all`
- **Update Order**: PUT `/order/update/:id`
- **Delete Order**: DELETE `/order/delete/:id`

#### Category Endpoints

- **Create Category**: POST `/category/create`
- **Get All Categories**: GET `/category/all`
- **Find Category by Name**: GET `/category/find/:name`
- **Update Category**: PUT `/category/update/:id`
- **Delete Category**: DELETE `/category/delete/:id`

### Swagger Documentation

Access the full API documentation using Swagger [here](http://localhost:3000/api-doc).

### Postman Collection

Download the Postman collection [here](/postman/Prosys%20-%20Backend.postman_collection.json).

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.

---

Feel free to reach out with any questions or feedback. Happy coding! 🚀

