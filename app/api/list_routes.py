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
    print("lists",lists)
    list_of_lists = []
    
    for lis in lists:
        task_of_tasks = []
        one_list = lis.to_dict()
        list_of_lists.append(one_list)
        for task in tasks:
            if task.list_id == lis.id:
                task_of_tasks.append(task.to_dict())
            print("task id",task.list_id)
            print("list id",lis.id)
            print(task.list_id == lis.id)
        
        one_list["Tasks"] = task_of_tasks
        print("lists3",one_list)

    print("lists2",list_of_lists)
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
    print("15665",current_user.id)
    print("2",current_user.is_authenticated)
    print("3",User.id)
    if current_user.is_authenticated:
        form = NewList()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            # data = form.data
            lis = List(
                name= form.data["name"]
            )
            db.session.add(lis)
            db.session.commit()
        return render_template('list_form.html', form=form)
    else: return '<h1>loser</h1>'

# @list_routes.route("/<int:id>", methods=["GET","DELETE"])
# def del_list(id):
#     if current_user.is_authenticated:
#         lis = List.query.get(id)
#         if(not lis):
#             return "<h1>No List<h1/>"
#         if lis.user_id == current_user.id:
#             db.session.delete(lis)
#             db.session.commit()
#             return "<h1>Deleted List<h1/>"
#         else: return "<h1>Not your List<h1/>"
#     else: return '<h1>LOSER</h1>'