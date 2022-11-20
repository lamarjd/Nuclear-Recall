# Getting Started with Flask React Project - NUCLEAR RECALL

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the starter for the Flask React Project. 

1. Clone the repository

### `git clone https://github.com/lamarjd/Dont-Forget-The-Milk` 

## Available Scripts

Before starting with the next steps, ensure you cd in to the frontend directory to make sure you have base dependencies for running this app.

=================================================

2. Install dependencies

###  `pipenv install -r requirements.txt`

To generate a new requirements.txt run this command

### `pipenv requirements > requirements.txt`

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   
### `pipenv shell`
   

   
### `flask db upgrade`
   

   
### `flask seed all`
   

   
### `flask run`
   
=================================================

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

Before starting with the next steps, ensure you cd in to the frontend directory to make sure you have base dependencies for running this app.

In the project directory, you can run:

### `npm install`

To start the application, run the following command:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

