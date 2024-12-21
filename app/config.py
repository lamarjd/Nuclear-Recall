import os


# class Config:
#     SECRET_KEY = os.environ.get('SECRET_KEY')
#     SQLALCHEMY_TRACK_MODIFICATIONS = False
#     # SQLAlchemy 1.4 no longer supports url strings that start with 'postgres'
#     # (only 'postgresql') but heroku's postgres add-on automatically sets the
#     # url in the hidden config vars to start with postgres.
#     # so the connection uri must be updated here (for production)
#     SQLALCHEMY_DATABASE_URI = os.environ.get(
#         'DATABASE_URL').replace('postgres://', 'postgresql://')
#     SQLALCHEMY_ECHO = True



class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY', 'default-secret-key')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_ECHO = True

    # Check if DATABASE_URL is set and adapt for production
    db_url = os.environ.get('DATABASE_URL')
    if db_url:
        # Replace 'postgres://' with 'postgresql://' for compatibility with SQLAlchemy
        SQLALCHEMY_DATABASE_URI = db_url.replace('postgres://', 'postgresql://')
    else:
        # Fallback for development
        SQLALCHEMY_DATABASE_URI = 'sqlite:///dev.db'
