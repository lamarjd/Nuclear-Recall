from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class NewTask(FlaskForm):
  body = StringField('Body', validators=[DataRequired()])
  submit = SubmitField("DEEEEZ")
