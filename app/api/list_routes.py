from flask import Blueprint, jsonify, render_template
from flask_login import login_required
from app.models import List


#import models

from ..models import Task, User, Note,List

list_routes = Blueprint('lists', __name__)


@list_routes.route('/',methods=["GET"])

def get_all_lists():
    lists = List.query.all()
    tasks = Task.query.all()
    print("lists",lists)
    list_of_lists = []
    task_of_tasks = []
    for lis in lists:
        one_list = lis.to_dict()
        for task in tasks:
            if task.list_id == lis.id:
                task_of_tasks.append(task.to_dict())
        
        list_of_lists.append(one_list)
        one_list["Tasks"] = task_of_tasks
        print("lists3",one_list)

    print("lists2",list_of_lists)
    # return lists_of_lists.to_dict()
    return jsonify({"lists":list_of_lists})


