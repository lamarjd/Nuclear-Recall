from flask import Blueprint, jsonify, render_template,request
from flask_login import login_required,current_user
from app.models import List,db
from app.forms.list_form import NewList

#import models

from ..models import Task, User, Note,List

list_routes = Blueprint('lists', __name__)


@list_routes.route('/',methods=["GET"])

def get_all_lists():
    lists = List.query.all()
    tasks = Task.query.all()
    list_of_lists = []
    
    for lis in lists:
        task_of_tasks = []
        one_list = lis.to_dict()
        list_of_lists.append(one_list)
        for task in tasks:
            if task.list_id == lis.id:
                task_of_tasks.append(task.to_dict())
        one_list["Tasks"] = task_of_tasks
    # return lists_of_lists.to_dict()
    return jsonify({"lists":list_of_lists})

# @list_routes.route('/<int:id>')
# def get_one_(id):
#     lis = List.query.get(id)
#     new_lis = lis.to_dict()

#     list_task = Task.query.filter(task.list_id == id).all()
#     new = [task.to_dict() for task in list_notes]
#     new_list["tasks"] = new

#     return new_lis

@list_routes.route("/new_list", methods=["GET","POST"])
def new_list():
    if current_user.is_authenticated:
        form = NewList()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            # data = form.data
            lis = List(
                name= form.data["name"],
                user_id = current_user.id)
            db.session.add(lis)
            db.session.commit()
        return render_template('list_form.html', form=form)
    else: return '<h1>loser</h1>'

@list_routes.route("/<int:id>", methods=["GET","DELETE"])
def del_list(id):
    if current_user.is_authenticated:
        lis = List.query.get(id)
        list_tasks = Task.query.filter(lis.id==Task.list_id).all()
        if(not lis):
            return "<h1>No List<h1/>"
        if lis.user_id == current_user.id:
            if (not not list_tasks):
                for task in list_tasks:
                    db.session.delete(task)
            db.session.delete(lis)
            db.session.commit()
            return "<h1>Deleted List<h1/>"
        else: return "<h1>Not your List<h1/>"
    else: return '<h1>LOSER</h1>'


@list_routes.route("/<int:id>", methods=["PUT"])
def edit_list(id):
    if current_user.is_authenticated:
        form = NewList()
        one_list = List.query.get(id)
        if(not one_list):
            return "<h1>No List<h1/>"
        form['csrf_token'].data = request.cookies['csrf_token']
        if one_list.user_id == current_user.id:
            if form.validate_on_submit():
                # data = form.data
                one_list.name= form.data["name"]
                db.session.commit()
            return "<h1>List CHANGED</h1>"
        else: return "<h1>Not your List<h1/>"
        # return render_template('list_form.html',form=form)
    else: return '<h1>loser</h1>'