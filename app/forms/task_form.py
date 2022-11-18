from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class NewTask(FlaskForm):
  body = StringField('Body')
  due_date = DateField("Due Date")
  list_id = IntegerField("List ID")
  submit = SubmitField("DEEEEZ")
