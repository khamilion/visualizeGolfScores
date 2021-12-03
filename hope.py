import requests
import sqlite3
from bs4 import BeautifulSoup

# author: Hope Foreman
# date: 11, Oct 2021

# setting up the database
database_name = 'golfers.db'
conn = sqlite3.connect(database_name)
c = conn.cursor()

# setting up connection with beautiful soup and web page
url = 'http://www.owgr.com/ranking'
r = requests.get(url)
# checks to see if the request is 200/passes
print(r.status_code)

# using beautifulsoup to find the table
soup = BeautifulSoup(r.text, 'lxml')
table = soup.find('table')

ranking = []


def create_golfer_table():
    c.execute("""CREATE TABLE golfers (
           this_week INTEGER,
           last_week INTEGER,
           end_2020 INTEGER,
           name TEXT,
           average_points REAL,
           total_points REAL,
          events_played INTEGER,
          points_lost REAL,
          points_gained REAL
    )""")


# method for indexing the row
def find_table_row(index):
    for row in table.find_all('tr')[index]:
        ranking.append(row.getText().strip())
        while "" in ranking:
            ranking.remove("")
    ranking.pop()
    #print(ranking)


# method to print record
def print_record(record):
    print(record[0], record[1], record[2], record[3],
          record[4], record[5], record[6], record[7], record[8])


# method to insert a persons row stats in sqlite
# param takes in the row's number
def inserting_sql(record_number):
    sql = """INSERT INTO golfers 
    (this_week, last_week, end_2020, name, average_points, total_points, events_played, points_lost, points_gained) 
    VALUES(?,?,?,?,?,?,?,?,?);"""
    c.execute(sql, record_number)


# calling the method to create sql table in database
create_golfer_table()

# gets and stores the top 100 rows from table into database
for i in range(100):
    find_table_row(i+1)
    print_record(ranking)
    inserting_sql(ranking)
    ranking = []


conn.commit()
conn.close()

