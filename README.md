[![Coverage Status](https://coveralls.io/repos/github/Ndataclento/freementor/badge.svg?branch=develop)](https://coveralls.io/github/Ndataclento/freementor?branch=develop)
[![Build Status](https://travis-ci.org/Ndataclento/freementor.svg?branch=develop)](https://travis-ci.org/Ndataclento/freementor)
[![Maintainability](https://api.codeclimate.com/v1/badges/63a557cdd3e40c43a65d/maintainability)](https://codeclimate.com/github/Ndataclento/freementor/maintainability)

# Free-Mentors
**Free Mentors** is a web application that links accomplished professionals and young people where they provide free mentorship sessions.

**Free Mentors features**
  1. Users can sign up.
  2. Users can sign in.
  3. Admin can change a user to a mentor.
  4. Users can view mentors.
  5. Users can view a specific mentor.
  6. Users can create a mentorship session request.
  7. A mentor can accept a mentorship session request.
  8. A mentor can decline a mentorship session request.

**Prerequisites**
  * Node
  * Postman
  
**Setup**
  1. Clone the repository
     ```https://github.com/Ndataclento/freementor.git```
     
  2. Install dependencies
  
     ```npm install```
     
  3. Start the server
  
     ```npm run start```
  
  4. Use Postman to test api on ```localhost:4000```
  
 **Run test**
 To run the application test run the following command in terminal
 
 ```npm test```
 
 **Endpoints**
 
 Method | Endpoint | Functionality
 -------| -------- | -------------
 POST | /api/v1/auth/signup | Create user account
 POST | /api/v1/auth/signin| User login
 PATCH| /api/v1/users/:id | Change a user to a mentor
 GET | /api/v1/mentors| View mentors
 GET| /api/v1/mentors/:id| View a specific mentor
 POST| /api/v1/sessions | Create a mentorship session request
 PATCH| /api/v1/sessions/:id/accept| Accept a mentorship session request
 PATCH| /api/v1/sessions/:id/decline| Decline a mentorship session request

**User Interface**

>https://ndataclento.github.io/freementor/UI/html/index.html

**This is my link to Heroku**

>
 
**Technology used**

**Frontend**
  * JavaScript
  * HTML
  * CSS

**Backend**
  * Node
  * Express
  * mocha
  * chai

**Author**
Ndatabaye Clement



