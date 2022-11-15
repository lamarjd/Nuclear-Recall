from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime



class Task(db.Model):
    __tablename__ = 'tasks'

    id = db.Column(db.Integer, primary_key = True)
    body = db.Column(db.String(2000), nullable = False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')))
    list_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('lists.id')))
    complete = db.Column(db.Boolean)
    due_date = db.Column(db.Date)
    created_at = db.Column(db.DateTime, default= datetime.utcnow)
    updated_at = db.Column(db.DateTime, default= datetime.utcnow)
    notes = db.relationship("Note",cascade="all,delete",backref="task")
    # May need model relationships here
    #   cohort = db.relationship("Cohort", back_populates="students")

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "user_id": self.user_id,
            "list_id": self.list_id,
            "complete": self.complete,
            "due_date": self.due_date,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
