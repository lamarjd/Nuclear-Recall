# Don't-Forget-The-Milk #

# CRUD Operations
1. Tasks
2. Lists
3. List summary (time, num tasks, num completed)
4. Search
5. Notes

Bonus: Autocomplete SmartAdd of task properties
Bonus: Subtasks


# User Stories
## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the lob-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Demo User

* As an unregistered and unauthorized user, I would like an easy to find and clear button on both the `/signup` and `/login` pages to allow me to visit the site as a guest without signing up or logging in.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on a Demo User button to log me in and allow me access as a normal user.
      * So that I can test the site's features and functionality without needing to stop and enter credentials.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying recent FauxTweets.
      * So that I can easily log out to keep my information secure.


## Tasks
### Add Task

* Authorized users can create a task and the task will be loaded onto the screen.
* After creation, the user can set a due date for the task (Due Date is not required, but optional).
* User can update the task details, and delete the task at will.

## Lists

* Authorized users can create groups of tasks (called lists) at will (lists are optional for each task).
* User can add an already created task to a list.
* User can update the name of list and delete a list at will (the tasks in the list, and notes, will also be deleted).

## Search

* Authorized user can search all tasks and lists using certain letters, words, or combination of words, letters, or any characters. (Create)
* Updating a search - The search parameters will persist after search is made, and the user can update the character input as needed to modify the search.
* Delete - user can clear the search bar and reset any results

## Notes

* Authorized user can add a note to any task they have created.
* User is able to edit (update) any notes on any task.
* All notes will be visible to the user upon accessing task details (clicking on the task).
* User is able to delete notes at will.
