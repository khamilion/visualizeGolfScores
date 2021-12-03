import json

from app import app
from flask import render_template
import sqlite3

golf = []
letter = []

@app.route('/')
@app.route('/home')
def home():  # put application's code here
    return render_template('home.html')


@app.route('/players')
def players():
    # create a connection to the database
    con = sqlite3.connect('golfers.db')

    cur = con.cursor()
    for row in cur.execute('''SELECT name, average_points, total_points,
        events_played, points_lost, points_gained FROM golfers ORDER BY name'''):

        # get the first letter of each name for a search function
        if row[0][0] not in letter:
            letter.append(row[0][0])

        golf.append({'name': row[0],
                     'average_points': row[1],
                     'total_points': row[2],
                     'points_lost': row[4],
                     'events_played': row[3],
                     'points_gained': row[5]})

    con.close()

    return render_template('players.html', golfers=golf, letter=letter)


@app.route('/p_gained_lost')
def gained_lost():
    # create a connection to the database
    con = sqlite3.connect('golfers.db')

    cur = con.cursor()
    for row in cur.execute('''SELECT name, average_points, total_points,
            events_played, points_lost, points_gained FROM golfers ORDER BY name'''):

        golf.append({'name': row[0],
                     'average_points': row[1],
                     'total_points': row[2],
                     'points_lost': row[4],
                     'events_played': row[3],
                     'points_gained': row[5]})

    con.close()

    return render_template('p_gained_lost.html', golfers=json.dumps(golf))


@app.route('/total_avg')
def total_avg():
    # create a connection to the database
    con = sqlite3.connect('golfers.db')

    cur = con.cursor()
    for row in cur.execute('''SELECT name, average_points, total_points,
               events_played, points_lost, points_gained FROM golfers ORDER BY name'''):
        golf.append({'name': row[0],
                     'average_points': row[1],
                     'total_points': row[2],
                     'points_lost': row[4],
                     'events_played': row[3],
                     'points_gained': row[5]})

    con.close()

    return render_template('total_avg.html', golfers=json.dumps(golf))
