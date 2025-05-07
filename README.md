# Patient Registration App

A simple frontend app built with React and PGlite for registering patients, storing their details in a local SQLite database, and running SQL queries to interact with the data. This app provides the ability to:

- Register patient information (Name, Age, Gender, Contact, Notes).
- Run custom SQL queries to retrieve and display patient data.

## Features

- **Patient Registration**: Allows users to input patient details and register them.
- **SQL Query Execution**: Run custom SQL queries on the database to interact with patient records.
- **Persistent Database**: Patient data is saved in a local database that persists across page reloads using IndexedDB.

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **PGlite**: In-memory SQLite engine for client-side database operations.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **IndexedDB**: Persistent client-side storage for SQLite database.

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd patient-registration
