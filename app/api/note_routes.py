from flask import Blueprint, jsonify, render_template
from flask_login import login_required
from app.models import Task
from app.forms.task_form import NewTask


#import models

from ..models import Task, User, Note

note_routes = Blueprint('notes', __name__)


@note_routes.route('/all')

def get_all_tasks():
    
    return 'i am here'