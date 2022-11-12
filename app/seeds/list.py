from app.models import db, List, environment, SCHEMA
from datetime import date

# Adds a demo user, you can add other users here if you want
def seed_lists():
    list1 = List(name='ScaryList', user_id=1, due_date= date.fromisoformat('2023-12-04'), complete=False)
    list2 = List( name='JohnLeeList', user_id=2, due_date= date.fromisoformat('2023-12-04'), complete=False)
    list3 = List( name='AndrewTranList', user_id=3, due_date= date.fromisoformat('2023-12-04'), complete=False)
    
   

    db.session.add(list1)
    db.session.add(list2)
    db.session.add(list3)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_lists():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.lists RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM lists")
        
    db.session.commit()