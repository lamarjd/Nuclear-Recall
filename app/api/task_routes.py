from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Task

#import models

from ..models import Task, User, Note

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')

def get_all_tasks():
    tasks = Task.query.all()
    return {"tasks": [task.to_dict() for task in tasks]}


@task_routes.route('/<int:id>')
def get_one_task(id):
    task_notes = Task.query.join(Note).filter(Note.task_id == id)
    return {"note": [note.to_dict() for note in task_notes]}





  
    



