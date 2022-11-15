from flask import Blueprint, jsonify, render_template, redirect, request, make_response
from flask_login import login_required,current_user
from app.models import Note, Task, User, db
from ..forms.note_form import NewNote
from datetime import datetime


note_routes = Blueprint('notes', __name__)

@note_routes.route('/')
def get_all_notes():
  notes = Note.query.all()
  response = {"notes": [note.to_dict() for note in notes]}
  return make_response(response, 200)


@note_routes.route("/new_note", methods=["GET","POST"])
def post_note():
  if current_user.is_authenticated:
      form = NewNote()
      form['csrf_token'].data = request.cookies['csrf_token']
      if form.validate_on_submit():
          note = Note(
              body= form.data["body"],
              task_id = form.data["task_id"]
              )
          db.session.add(note)
          db.session.commit()
          return make_response(note.to_dict(), 201)
  else: return make_response("Unauthorized", 401)



@note_routes.route("/<int:id>")
def single_note(id):
  note = Note.query.get(id)
  return make_response(note.to_dict(), 200)


@note_routes.route("/<int:id>", methods=["DELETE"])
def del_note(id):
  if current_user.is_authenticated:
    note = Note.query.get(id)
    db.session.delete(note)
    db.session.commit()
    return make_response("Successfully deleted", 200)
  else:
    return make_response("Unauthorized", 401)






@note_routes.route("/<int:id>", methods=["PUT"])
def edit_note(id):
  if current_user.is_authenticated:
    new_note = Note.query.get(id)
    form = NewNote()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
      new_note.body = form.data["body"]
      db.session.commit()

      return make_response(new_note.to_dict(), 200)

  else: return make_response("Unauthorized", 401)
