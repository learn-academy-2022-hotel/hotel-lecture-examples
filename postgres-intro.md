# Intro to Databases and Postgresql

```ruby
class Student 
  def initialize(name, cohort)
  @name = name
  @cohort = cohort
  end
end

Student.new('Romeo', 'Hotel')
Student.new('Heath', 'Foxtrot')
Student.new('Nicole', 'Delta')
```

## Databases
- way of storing data in an organized way
- Postgres is Relational database.  
  - rows and columns
- schema - representation of the database layout

Two things:
1. what is the structure
2. create actual data

Model - defines the columns and types of data stored (like a class)
  - each row is a set of information (instance of Class (object))

Primary Key - unique identifier - each instance has one

## Postgresql

- domain-specific
- talks to dbs
- it is opensource
- is an Object-Relational Database Mgmt System
- OOP approach to programming


`SELECT name, continent FROM country`  this returns only what we need. Returns it as it's ordered in the table. 


All the data: SELECT * FROM country

SELECT name, continent
FROM country

SELECT name, continent, population
FROM country
LIMIT 10

*** WHERE is a comparison operator ***
SELECT name, continent, population
FROM country
WHERE continent = 'North America'

SELECT name, continent, population
FROM country
WHERE continent != 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6

SELECT name, continent, population
FROM country
WHERE population < 1e6
AND continent = 'North America'

SELECT name, continent, population
FROM country
WHERE population < 1e6
OR continent = 'North America'

*** LIKE used in WHERE clause to search for specified pattern in a column ***
*** Using % called wildcard will be used in conjunction with LIKE ***
Using LIKE and wildcard to get back all the Americas:
SELECT name, continent, population
FROM country
WHERE continent LIKE '%America'

10 most recently independent countries:
SELECT name, region, indepyear
FROM country
WHERE indepyear IS NOT null
ORDER BY indepyear DESC
LIMIT 10

