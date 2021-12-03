# Flask-SQLAlchemy, an extension that provides a Flask-friendly wrapper to the popular SQLAlchemy package,
#   which is an Object Relational Mapper or ORM.

from flask import Flask
import os
import sqlite3
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

import routes

if __name__ == '__main__':
    app.run()
