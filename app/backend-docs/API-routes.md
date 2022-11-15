## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### All endpoints that require authentication

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

All endpoints that require authentication and the current user does not have the
correct role(s) or permission(s).

* Request: endpoints that require proper authorization
* Error Response: Require proper authorization
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Forbidden",
      "statusCode": 403
    }
    ```
[ ]
### Get the Current User

Returns the information about the current user that is logged in.

* Require Authentication: true
* Request
  * Method: GET
  * URL: /api/session
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith"
    }
    ```

### Log In a User

Logs in a current user with valid credentials and returns the current user's
information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/session
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "credential": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "email": "john.smith@gmail.com",
      "username": "JohnSmith",
      "token": ""
    }
    ```

* Error Response: Invalid credentials
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Invalid credentials",
      "statusCode": 401
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "credential": "Email or username is required",
        "password": "Password is required"
      }
    }
    ```
[x]
### Sign Up a User

Creates a new user, logs them in as the current user, and returns the current
user's information.

* Require Authentication: false
* Request
  * Method: POST
  * URL: /api/users
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "password": "secret password"
    }
    ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "firstName": "John",
      "lastName": "Smith",
      "username": "JohnSmith",
      "email": "john.smith@gmail.com",
      "token": ""
    }
    ```

* Error response: User already exists with the specified email
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "email": "User with that email already exists"
      }
    }
    ```

* Error response: User already exists with the specified username
  * Status Code: 403
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "User already exists",
      "statusCode": 403,
      "errors": {
        "username": "User with that username already exists"
      }
    }
    ```

* Error response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "email": "Invalid email",
        "username": "Username is required",
        "firstName": "First Name is required",
        "lastName": "Last Name is required"
      }
    }
    ```
## TASKS


### Get all tasks
Request
URL : “/all”
Method: get
Body: none

Success
Status: 200
Headers: Content-Type: application/json
Body: {[Tasks: 
id, 
body, 
user_id,
list_id,
complete,
due_date,
created_at,
updated_at]}?

### Get task details
Request
URL : “/all/:taskId”
Method: GET
Body: {“Task Details”:
 {
“Taskname” : “name”,
Due_date: “?”,
listName: null”,
{Notes: 
{ Note1: {
  body: body,
  user_id: user_id,
  task_id,
  created_at,
  updated_at
}, ... notes} 
	
}

Success
Status: 200
Headers: Content-Type: application/json


### Create a task 


Method: Post
URL: /all
Headers: “Content-Type”: “Application/json”
Body: {“Task” : 
body,
}

Success
Method: POST
URL: “/all/




### Update a task


Route: “/all/:taskId”
Method: “PUT”
Headers: Content-Type: Application/json
Body: { “Task” : body}




### Delete a Task

Method: DELETE
URL: “/all/:taskId
Body: None

Success
Status: 200
Headers: Content-Type: application/json



### Get all lists

Method: GET
URL: /lists
Body: None

Status: 200
Headers: Content-Type
Body: { Lists : { [body, [task1, task2 task3]]}}




### Create a list 


Method: Post
URL: /lists
Headers: “Content-Type”: “Application/json”
Body: {“List” : 
{body},
}

Success
Method: POST
URL: “/lists/:id


### Update a list 


Method: PUT
URL: /lists/:id
Headers: “Content-Type”: “Application/json”
Body: {“List” : 
{body},
}

Success
URL: “/lists/:id


### Create a list 


Method: DELETE
URL: /lists/:id
Headers: “Content-Type”: “Application/json”
Body: {“List” : 
{body},
}

Success
URL: “/all


### Get all notes

Method: GET
URL: /task/:id
Body: None

Status: 200
Headers: Content-Type
Body: { Task : { [. . . body, [note1, note2 note3]]}}




### Create a note 


Method: Post
URL: /task/:id
Headers: “Content-Type”: “Application/json”
Body: {“Note” : 
{noteBody},
}

Success
Method: POST
URL: “/lists/:id


### Update a note 


Method: PUT
URL: /task/:id
Headers: “Content-Type”: “Application/json”
Body: {“Task” : 
{NoteBody},
}

Success
URL: “/task/:id


### Delete a note 


Method: DELETE
URL: /task/:id
Headers: “Content-Type”: “Application/json”
Body: Null

Success
URL: “/all
