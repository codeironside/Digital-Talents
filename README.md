# Introduction

This API allows the user to perform CRUD (Create, Read, Update, Delete) operations on a MongoDB database of users. It has been built using Node.js and the Express.js framework. To handle large numbers of requests, the API uses the cluster module for creating multiple worker processes. Data validation and error handling were also implemented

## Requirements

 - Node.js
 - MongoDB



## Installation

 - Clone the repository
 [clone url]( git clone https://github.com/codeironside/Digital-Talents.git}

## install the dependencies 

 ```javascript
    npm install
  ```
## Start MongoDB
 ```bash
    mongod
  ```
  
## Start the server

```bash
npm start
```

## Endpoints

  The API has the following endpoints:

## Get all users
 - URL : `/users`
 - Method : GET
 - Success Response :
 - Code : 200
 - Content :
 ```javascript
              {
       "message": [
           {
               "_id": "63d0a58337b43027f9fd270c",
               "name": "amaka samuel",
               "email": "amaka@email.com",
               "password": "123456789",
               "createdAt": "2023-01-25T03:44:03.189Z",
               "updatedAt": "2023-01-25T03:44:03.189Z",
               "__v": 0
           },
           {
               "_id": "63d0a59637b43027f9fd270f",
               "name": "christopher",
               "email": "chrstopher@email.com",
               "password": "123456789",
               "createdAt": "2023-01-25T03:44:22.817Z",
               "updatedAt": "2023-01-25T03:44:22.817Z",
               "__v": 0
           },
           {
               "_id": "63d0b5d96de69044e92892cf",
               "name": "john doe",
               "email": "email@email.com",
               "password": "123456789",
               "createdAt": "2023-01-25T04:53:45.253Z",
               "updatedAt": "2023-01-25T04:53:45.253Z",
               "__v": 0
           }
       ]
   }
   
```   

## Create a User 

 - This endpoint allows the user to create a new user in the database.

 - URL: `/users`

 - Method:POST

## Data Parameters
 - The request body should contain the following JSON object:
 ``` javascript
                                  
                        {
                        "name": "John Doe",
                        "email": "email@email.com",
                        "password": "password789"
                    }
```

### Success Response
 - Code : 200
   Content :
 ```javascript
 
  {
     "message": {
         "name": "john doe",
         "email": "email@email.com",
         "password": "123456789",
         "_id": "63d0b5d96de69044e92892cf",
         "createdAt": "2023-01-25T04:53:45.253Z",
         "updatedAt": "2023-01-25T04:53:45.253Z",
         "__v": 0
     }
 }
```
## Error Response
 - Code : `400`
 - Content : `"Invalid input"`


## Update a User

 - This endpoint allows the user to update an existing user in the database.

 - URL: `/users/:id`

 - Method: PUT

## Data Parameters

- The request body should contain the following JSON object:
```javascript

{
    "password": "newpassword"
}
```

## Success Response
- Code : `200`
 - Content :
 ```javascript
 {
    "message": {
        "_id": "63d0a55937b43027f9fd2709",
        "name": "john doe",
        "email": "email@email.com",
        "password": "newpassword",
        "createdAt": "2023-01-25T03:43:21.912Z",
        "updatedAt": "2023-01-25T04:19:46.450Z",
        "__v": 0
    }
}
```

## Error Response
 - Code : `404`
 - Content : `"User not found"`
 - Code : `400`
 - Content : `"Invalid input"`
 
## Delete a User
 - This endpoint allows the user to delete an existing user in the database.

 - URL:`/users/:id`
 - Method:`DELETE`
 ## Success Response
 - Code : `200`
 - Content :

```javascript
 {
    "message": "User deleted successfully"
}
```

## Error Response
 - Code :`404`
 - Content :`"User not found"`


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
