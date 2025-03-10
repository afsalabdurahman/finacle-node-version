# Finacle Clone (Node.js Version)

This project is a **Node.js** based clone of **Finacle**, a leading Core Banking Solution (CBS) that helps financial institutions with digital banking functionalities. It provides essential banking operations such as creating deposit accounts, managing customers, and integrating with a SQL database for persistent storage.

The primary objective of this project is to simulate the core features of a banking system like **account creation**, **deposit management**, and **customer ID generation** in a Node.js environment.

## Features

- **Account Creation**: Open new deposit accounts for customers.
- **Deposit Management**: Manage deposits with interest rates.
- **Customer ID Generation**: Automatically generates unique customer IDs when a deposit account is created.
- **SQL Integration**: Data is stored persistently in an SQL database.
- **Interest Rate Table**: Predefined interest rates based on table codes.
- **REST API**: Exposes endpoints for managing customer accounts and deposits.

## Tech Stack

- **Node.js**: Backend runtime for building the application.
- **Express**: Web framework for building the API.
- **SQL (MySQL)**: Database for storing customer and deposit account data.
- **Sequelize**: ORM for interacting with the SQL database.
- **JWT**: JSON Web Token (for authentication - if needed in the future).
  
## Getting Started

### Prerequisites

To get started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [SQL Database](https://www.mysql.com/) (MySQL or PostgreSQL)
  
### Installation

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/your-username/finacle-clone-node.git
   cd finacle-clone-node
   local-host:8000
