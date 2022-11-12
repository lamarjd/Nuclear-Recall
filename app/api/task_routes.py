from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Task

#import models

from ..models import Task, User

task_routes = Blueprint('tasks', __name__)


@task_routes.route('/')

def get_all_tasks():
    tasks = Task.query.all()
    # blah = tasks.to_dict()
    return_obj = {}
    for task in tasks:
        return_obj[task]
        return_obj.append(task.to_dict())

  
    



