# PostgreSQL JSONB Experiment

## Aim

To explore JSONB in PostgreSQL and understand how PostgreSQL can support both SQL and NoSQL-style data storage.

## Objective

- Understand the JSONB data type.
- Store JSON documents in PostgreSQL.
- Read and search JSONB data.
- Update JSONB values.
- Add new fields without changing the table structure.
- Create a GIN index for JSONB.
- Understand how PostgreSQL JSONB can be used as an alternative to MongoDB for suitable applications.

## Technologies Used

- PostgreSQL
- SQL
- JSONB
- GIN Index

## Database Structure

The `students` table contains:

| Column | Type | Purpose |
|---|---|---|
| id | SERIAL | Primary key |
| name | VARCHAR | Student name |
| email | VARCHAR | Student email |
| details | JSONB | Flexible JSON data |

## JSONB Example

```json
{
    "phone": "9876543210",
    "skills": ["Python", "Java", "SQL"],
    "address": {
        "city": "Dehradun",
        "country": "India"
    },
    "semester": 4
}