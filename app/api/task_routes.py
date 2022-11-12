from flask import Blueprint, jsonify, render_template
from flask_login import login_required,current_user
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

@task_routes.route('/new_task', methods=['GET', 'POST'])
def new_task():
    form = NewTask()
    if form.validate_on_submit():
        data = form.data
        task = Task(
            body= data["body"]
        )
        db.session.add(task)
        db.session.commit()
    
    return render_template('task_form.html', form=form)
