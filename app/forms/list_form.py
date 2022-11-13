from flask_wtf import FlaskForm
from wtforms.fields import StringField, IntegerField, BooleanField, SubmitField, DateField, SelectField
from wtforms.validators import DataRequired


class NewList(FlaskForm):
  name = StringField('name', validators=[DataRequired()])
  submit = SubmitField("pepehands")