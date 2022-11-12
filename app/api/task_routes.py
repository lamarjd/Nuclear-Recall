from flask import Blueprint, jsonify, render_template
from flask_login import login_required
from app.models import Task
from app.forms.task_form import NewTask


#import models

from ..models import Task, User, Note

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')

def get_all_tasks():
    tasks = Task.query.all()
    return {"tasks": [task.to_dict() for task in tasks]}


@task_routes.route('/<int:id>')
def get_one_task(id):
    task = Task.query.get(id)
    new_thing = task.to_dict()
    print(new_thing)

    task_notes = Note.query.filter(Note.task_id == id).all()
    something = [note.to_dict() for note in task_notes]
    new_thing["notes"] = something

    return new_thing

@task_routes.route("/new_task", methods=["POST"])
def new_task():
    form = NewTask()
    if form.validate_on_submit():
        data = form.data
        task = Task(
            body= data["body"]
        )

    return render_template('task_form.html', form=form)
