from app.models import db, Task, environment, SCHEMA
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_tasks():
    task1 = Task(body='Obtain iodine tablets', user_id=1, list_id=1, due_date= date.fromisoformat('2023-12-04'), complete=False)
    task2 = Task(body='get meat to survive the winter', user_id=1, due_date= date.fromisoformat('2023-12-04'), complete=False)
    task3 = Task(body='bury gold until the good times come', user_id=1, list_id=1, due_date= date.fromisoformat('2023-12-04'), complete=False)
    
    
   

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_tasks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tasks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM tasks")
        
    db.session.commit()