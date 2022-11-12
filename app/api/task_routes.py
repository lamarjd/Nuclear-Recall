from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Task

task_routes = Blueprint('tasks', __name__)