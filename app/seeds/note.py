from app.models import db, Note, environment, SCHEMA
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_notes():
    note1 = Note(body='The man with one eye has iodine tablets', user_id=1, task_id=1)
    note2 = Note(body='He said he will trade iodine for herbs and meat', user_id=1, task_id=1)
    note3 = Note(body='four feet deep four feet next to big rock near crack', user_id=1, task_id=3)
    
    
   

    db.session.add(note1)
    db.session.add(note2)
    db.session.add(note3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_notes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.notes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM notes")
        
    db.session.commit()