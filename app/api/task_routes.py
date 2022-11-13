from flask import Blueprint, jsonify, render_template, request, redirect
from flask_login import login_required, current_user
from app.models import Task,db
from app.forms.task_form import NewTask

#import models
from ..models import Task, User, Note

task_routes = Blueprint('tasks', __name__)

#  get all tasks
@task_routes.route('/')
def get_all_tasks():
    tasks = Task.query.all()
    return {"tasks": [task.to_dict() for task in tasks]}

#  get task by ID
@task_routes.route('/<int:id>')
def get_one_task(id):
    task = Task.query.get(id)
    new_thing = task.to_dict()
    print(new_thing)

    task_notes = Note.query.filter(Note.task_id == id).all()
    something = [note.to_dict() for note in task_notes]
    new_thing["notes"] = something

    return new_thing

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
           
        return render_template('task_form.html', form=form)
    return redirect("/api/all")
    # return '<h1>Try again</h1>'

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
        return "<h1>Deleted Task</h1>"


@task_routes.route("/<int:id>", methods=["PUT"])
def edit_task(id):
    if current_user.is_authenticated:
        form = NewTask()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            task = Task.query.get(id)
            edited_task = Task(
                body = form.data["body"],
                user_id = current_user.id
            )
            # if task.id == edited_task.id:
            #     print("task ID", task.id)
            db.session.add(edited_task)
            db.session.commit()
            # return redirect("/api/all")
        return render_template('task_form.html', form=form)
    else: return "<h1>No task</h1>"