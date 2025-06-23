<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/lamarjd/Dont-Forget-The-Milk">
    <img src="https://res.cloudinary.com/dncypdqkb/image/upload/v1679463918/mushroom-zoom_ktfzrn.png" alt="Logo" width="800" height="500" style="background-color:black">
  </a>

  <h3 align="center">Nuclear Recall</h3>

  <p align="center">
     Nuclear Recall, a Remember the Milk clone, is a productivity / To-Do list platform designed for people who need help remembering things. Create a To-Do list, add a task, and make notes so you can keep your head on straight. Once complete with the task, mark it as complete and move on!     
    <br />
    <a href="https://github.com/lamarjd/Dont-Forget-The-Milk"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://nuclear-recall.onrender.com">View Live Site</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

## About The Project

[Click here to view Nuclear Recall live on the web!](https://nuclear-recall.onrender.com/)
<br>
</br>
<!-- <img src="https://drive.google.com/file/d/1_ZGAlDCtXWaXdN268qPp0EjHJmh5AKDn/view?usp=share_link" alt="homepage" /> -->

## Overall Structure

### Back End

The app was built using Flask and Sequelize on the back end with a PostgreSQL database. 

### Front End

The front end is built with React and Javascript while utilizing Redux architecture, producing a lightning-fast user interface and calling upon dynamically rendered components.

### Built With

- [JavaScript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Python](https://www.python.org/)
- [Flask](https://flask.palletsprojects.com/en/2.2.x/)
- [Node.js](https://nodejs.org/en/)
- [HTML](https://html.com/)
- [CSS](http://www.css3.info/)

<!-- GETTING STARTED -->

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the starter for the Flask React Project. 

1. Clone the repository

```bash
 git clone https://github.com/lamarjd/Dont-Forget-The-Milk
 ```

## Available Scripts

Before starting with the next steps, ensure you cd in to the app (backend) directory to make sure you have base dependencies for running this app.

=================================================

2. Install dependencies (Backend / Flask)

```bash
  pipenv install -r requirements.txt
  ```

To generate a new requirements.txt run this command

```bash
 pipenv requirements > requirements.txt
 ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app
   
```bash
 pipenv shell 
 ```
   
```bash
 flask db upgrade
 ```
   
```bash
 flask seed all 
 ```
   
```bash
 flask run 
 ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

Before starting with the next steps, ensure you cd in to the react-app directory to make sure you have base dependencies for running this app.

=================================================

In the project directory, you can run:

```bash
 npm install
 ```

To start the application, run the following command:

```bash
 npm start
 ```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Flask check out the [Flask documentation](https://flask.palletsprojects.com/en/2.2.x/).

To learn SQLAlchemy check out the [SQLAlchemy documentation](https://www.sqlalchemy.org/).

To learn WTForms check out the [WTForms documentation](https://wtforms.readthedocs.io/en/2.3.x/).

# Contact The Project Development Team

## Richard Baine
Email: richardbaine@gmail.com

LinkedIn https://www.linkedin.com/in/richard-baine-87184b29/

GitHub https://github.com/Richard-M-Baine

## Jake Lamar
Email: jacob.lamar16@gmail.com

Github: https://github.com/lamarjd

LinkedIn: https://www.linkedin.com/in/jacob-lamar-73449040/

## Tan Nguyen
Email: Taan3311@gmail.com

Github:https://github.com/Tan0699

LinkedIn: https://www.linkedin.com/in/tan-nguyen-8b0a8a257/ 

## Christopher Pannella
Email: cpannella3@gmail.com

Github: https://github.com/cpannella

LinkedIn: https://www.linkedin.com/in/chrisotpher-pannella-ab0852242/
