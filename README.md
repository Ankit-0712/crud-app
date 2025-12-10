# CRUD Application – Angular + Spring Boot + PostgreSQL

A full-stack CRUD (Create, Read, Update, Delete) application built using **Angular**, **Spring Boot**, and **PostgreSQL**.

---

## 🛠️ Tech Stack

### Frontend

* Angular
* TypeScript
* HTML / CSS
* Angular Forms
* HTTPClient

### Backend

* Spring Boot
* Java
* Spring Data JPA
* REST API

### Database

* PostgreSQL

---

## 📁 Project Structure

### Backend (Spring Boot)

```
src/
 └── main/
      ├── java/com/example/app/
      │       ├── controller/
      │       ├── service/
      │       ├── repository/
      │       ├── model/
      │       └── CrudApplication.java
      └── resources/
             ├── application.properties
             └── data.sql (optional)
```

### Frontend (Angular)

```
src/
 ├── app/
 │     ├── components/
 │     ├── services/
 │     ├── models/
 │     └── app.module.ts
 └── assets/
```

---

## ⚙️ Backend Setup

### 1. Create PostgreSQL Database

```sql
CREATE DATABASE crud_app;
```

### 2. Configure application.properties

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/crud_app
spring.datasource.username=postgres
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 3. Run Backend

```bash
mvn spring-boot:run
```

Backend URL: `http://localhost:8080`

---

## 🌐 Frontend Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Angular App

```bash
ng serve --open
```

Frontend URL: `http://localhost:4200`

---

## 🔗 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /api/users      | Fetch all users |
| GET    | /api/users/{id} | Get user by ID  |
| POST   | /api/users      | Create new user |
| PUT    | /api/users/{id} | Update user     |
| DELETE | /api/users/{id} | Delete user     |

---

## ✨ Features

* Add User
* View Users
* Update User
* Delete User
* Angular Form Validation
* REST API Integration
* PostgreSQL Persistent Storage

---

## 📦 Build Instructions

### Build Angular

```bash
ng build --prod
```

### Package Spring Boot App

```bash
mvn clean install
```

---

## 👨‍💻 Author

**Ankit Pant**
