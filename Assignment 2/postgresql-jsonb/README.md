# 📖 Assignment 2 — PostgreSQL JSONB Experiment

## 📌 Overview

This experiment explores the **JSONB data type in PostgreSQL** and demonstrates how PostgreSQL supports structured relational data along with flexible JSON-based data storage.

JSONB allows JSON data to be stored in a binary format, making it useful for working with semi-structured data and performing queries on JSON objects.

## 🎯 Aim

To explore JSONB in PostgreSQL and understand how PostgreSQL can support both SQL and NoSQL-style data storage.

## 🎯 Objective

To understand:

- The JSONB data type in PostgreSQL
- Storing JSON documents in database tables
- Working with structured and semi-structured data
- Inserting JSON data into a PostgreSQL table
- Retrieving JSONB data using SQL queries
- Accessing values and fields from JSON objects
- The role of PostgreSQL in supporting flexible data storage

## 💻 Technologies Used

- PostgreSQL
- SQL
- JSON
- JSONB

## 📋 Introduction to JSONB

PostgreSQL supports both `JSON` and `JSONB` data types.

- **JSON:** Stores JSON input text and preserves its textual representation.
- **JSONB:** Stores JSON data in a decomposed binary format, which is generally more efficient for processing and supports indexing.

JSONB is useful when an application needs flexible data structures without creating a separate database table for every possible field.

## ⚙️ Experiment Implementation

The SQL script for this experiment is stored in `jsonb_demo.sql`.

The script can be used to demonstrate JSONB operations such as creating tables, inserting JSON data, and querying stored values, depending on the statements included in the file.

### Example: Creating a Table with JSONB

```sql
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    details JSONB
);
```

This example creates a table with an automatically generated ID and a JSONB column for storing product details.

### Example: Inserting JSON Data

```sql
INSERT INTO products (details)
VALUES (
    '{"name": "Laptop", "price": 55000, "brand": "Example"}'
);
```

This inserts a JSON object into the `details` column.

### Example: Retrieving JSONB Data

```sql
SELECT * FROM products;
```

This retrieves the stored records.

**Note:** These SQL statements are illustrative examples. Refer to `jsonb_demo.sql` for the exact implementation used in the assignment.

## 🔍 Working with JSONB Fields

PostgreSQL provides operators for accessing JSONB values.

| Operator | Purpose |
|---|---|
| `->` | Retrieves a JSON object or array element |
| `->>` | Retrieves a JSON field as text |
| `@>` | Checks whether a JSONB value contains another JSONB value |

Example:

```sql
SELECT details -> 'name'
FROM products;
```

To retrieve the name as text:

```sql
SELECT details ->> 'name'
FROM products;
```

## 📂 Project Structure

```text
Assignment 2/
└── postgresql-jsonb/
    ├── README.md
    └── jsonb_demo.sql
```

- `README.md` — Documentation for the experiment.
- `jsonb_demo.sql` — SQL script for the PostgreSQL JSONB experiment.

## 🚀 How to Run

### 1. Install PostgreSQL

Install PostgreSQL and ensure that the database server is running.

### 2. Open the SQL Script

Open `jsonb_demo.sql` in a PostgreSQL-compatible SQL editor, such as `psql` or pgAdmin.

### 3. Execute the SQL Statements

Run the statements in the script in the correct order.

If using the PostgreSQL command-line client, navigate to the directory containing the script and execute:

```bash
psql -U postgres -d your_database -f jsonb_demo.sql
```

Replace `postgres` with your PostgreSQL username and `your_database` with the name of your database.

### 4. Verify the Results

Review the query results in your SQL editor or terminal to confirm that the statements execute successfully.

## 📚 Concepts Demonstrated

- PostgreSQL database management
- SQL statements
- JSON and JSONB data types
- Semi-structured data storage
- JSONB field access
- JSONB query operators
- Data insertion and retrieval
- Relational databases with flexible data structures

## ⚠️ Note

- PostgreSQL must be installed and running before executing the SQL script.
- The exact tables, sample data, and queries depend on the contents of `jsonb_demo.sql`.
- The example statements in this README explain common JSONB operations and should not be treated as a replacement for the assignment's actual SQL script.

## 🧭 Navigation

- ⬅️ Back to [Main Repository](../../README.md)

## 👩‍💻 Submitted By

**Name:** Hrishitha Badavath
**SAP ID:** 590015596
**Course:** Backend Development
**University:** UPES

## 📝 Summary

Assignment 2 — Exploring PostgreSQL JSONB for storing and querying semi-structured JSON data within a relational database.
