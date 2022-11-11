from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime


class List(db.Model):

    __tablename__ = 'lists'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(30), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    complete = db.Column(db.Boolean)
    due_date = db.Column(db.Date)
    created_at = db.Column(db.DateTime, default= datetime.utcnow)
    updated_at = db.Column(db.DateTime, default= datetime.utcnow)