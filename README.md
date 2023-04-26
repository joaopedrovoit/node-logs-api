# Node CRUD with Yarn, Express, TypeScript and SQLite

This is a simple CRUD (Create, Read, Update, Delete) application in Node.js using Yarn as the package manager, Express as the web framework, TypeScript as the programming language, and SQLite as the database.

## Requirements

- Node.js
- Yarn

## Installation

1. Clone this repository:

```
git clone https://github.com/joaopedrovoit/node-logs-api.git
```

2. Install dependencies:

```
yarn install
```

3. Run the application:

```
yarn start
```

## API Endpoints

The following endpoints are available:

- `GET /api/logs`: Retrieves all logs.
- `GET /api/logs/:id`: Retrieves a single log by ID.
- `POST /api/logs`: Creates a new log.
- `PUT /api/logs/:id`: Updates a log by ID.
- `DELETE /api/logs/:id`: Deletes a log by ID.

## Database

This application uses SQLite as the database. The database file is located in the `db` folder and is named `logs.db`.

## Development

To start the development server:

```
yarn dev
```

To build the TypeScript code:

```
yarn build
```

## Conclusion

This is a simple example of a CRUD application in Node.js using Yarn, Express, TypeScript, and SQLite. It can be used as a starting point for building more complex applications.
