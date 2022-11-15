from flask import Blueprint, jsonify, render_template, request, redirect, Response, make_response
from flask_login import login_required, current_user
from app.models import Task,db
from app.forms.task_form import NewTask

#import models
from ..models import Task, User, Note

task_routes = Blueprint('tasks', __name__)

#  get all tasks
@task_routes.route('/')

def get_all_tasks():
    # if current_user.is_authenticated:
        tasks = Task.query.all()
        response = {"tasks": [task.to_dict() for task in tasks]}
        return make_response(response, 200)
    # else:
    #     return make_response("Unauthorized", 401)

#  get task by ID
@task_routes.route('/<int:id>')
def get_one_task(id):
    if current_user.is_authenticated:
        task = Task.query.get(id)
        if not task:
            return make_response("Doesn't exist", 404)
        new_thing = task.to_dict()
        task_notes = Note.query.filter(Note.task_id == id).all()
        something = [note.to_dict() for note in task_notes]
        new_thing["notes"] = something

        return make_response(new_thing, 200)
    return make_response("Unauthorized", 401)

# post a new task
@task_routes.route('/new_task', methods=['GET', 'POST'])
def new_task():
    if current_user.is_authenticated:
        form = NewTask()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            data = form.data
            task = Task(
                body= data["body"],
                user_id = current_user.id
            )
            db.session.add(task)
            db.session.commit()
        return make_response(task.to_dict(), 201)
    else: return make_response("Unauthorized", 401)

# Delete a task
@task_routes.route("/<int:id>", methods=["DELETE"])
def delete_task(id):
    if current_user.is_authenticated:
        task = Task.query.get(id)
        if(not task):
            return '<h1>No such Task Exists</h1>'
        if task.user_id == current_user.id:
            db.session.delete(task)
            db.session.commit()
            return {
            "message": "Successfully deleted",
            "statusCode": 200
            }
        else:
            return make_response("Unauthorized", 401)
    return redirect("/api/all")

@task_routes.route("/<int:id>", methods=["PUT"])
def edit_task(id):
    if current_user.is_authenticated:
        form = NewTask()
        form['csrf_token'].data = request.cookies['csrf_token']
        one_task = Task.query.get(id)
        if(not one_task):
            return "<h1>No Task</h1>"
        if one_task.user_id == current_user.id:
            if form.validate_on_submit():
                one_task.body = form.data["body"]
                db.session.commit()
            # return render_template('task_form.html', form=form)
            return make_response(one_task.to_dict(), 200)
        else:
            return make_response("Unauthorized", 401)
    else:
        return make_response("Unauthorized", 401)
            # return "<h1>Task Edited</h1>"

@task_routes.route("/<int:id>/list", methods=["PUT"])
def task_to_list(id):
    if current_user.is_authenticated:
        form = NewTask()
        form['csrf_token'].data = request.cookies['csrf_token']
        one_task = Task.query.get(id)
        if(not one_task):
            return "<h1>No Task</h1>"
        if one_task.user_id == current_user.id:
            if form.validate_on_submit():
                one_task.body = form.data["body"]
                one_task.list_id = form.data["list_id"]
                db.session.commit()
            return make_response(one_task.to_dict(), 200)
