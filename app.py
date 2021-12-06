# this script hosts the application

from flask import Flask
import os
import sqlite3


# Create an instance of the Flask class imported from flask package
# Flask uses the location of the module passed here (__name__) as a starting point when
# it needs to load associated resources such as template files
app = Flask(__name__)

import routes

if __name__ == '__main__':
    app.run()
