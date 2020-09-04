from flask import Flask, request, jsonify, flash
import mysql.connector
from flask_cors import CORS, cross_origin
from mysql.connector import Error
import bcrypt
from werkzeug.security import generate_password_hash, check_password_hash
import re

app = Flask(__name__)
CORS(app)
app.config['JSON_ADD_STATUS'] = True


@app.route('/sign-in', methods=['POST'])
def sign_in():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        sign_in_details = request.get_json()
        email = sign_in_details['email']
        password = sign_in_details['password']

        hashed_value = generate_password_hash(password)
        connection = mysql.connector.connect(host="localhost", user="root", password="1234",
                                             database="sample_project_db")
        mycursor = connection.cursor()
        query = "INSERT INTO  sign_in(email, password) VALUES (%s,%s)"
        val = (email, hashed_value)
        mycursor.execute(query, val)
        connection.commit()
        return jsonify({'result': result})


@app.route("/sign-in-get-all", methods=['GET'])
def sign_in_get_all():
    connection = mysql.connector.connect(host="localhost", user="root", password="1234", database="sample_project_db")
    mycursor = connection.cursor()
    mycursor.execute("SELECT email,password FROM users")
    results = mycursor.fetchall()
    connection.commit()
    return jsonify(results)


@app.route("/sign-in-get", methods=['GET'])
def sign_in_get():
    if request.method=='GET':
        user_details = request.form
        email = user_details['email']
        password = user_details['password']
        print(user_details)

    connection = mysql.connector.connect(host="localhost", user="root", password="1234", database="sample_project_db")
    mycursor = connection.cursor()
    sql = "SELECT password FROM users Where email=%s LIMIT 1 "

    data_search = (email,)

    mycursor.execute(sql, data_search)
    results = mycursor.fetchone()[0]
    print(results)

    connection.commit()
    result = check_password_hash(results, password)
    return str(result)
    return jsonify({'results': result})


@app.route('/<password>', methods=['POST'])
def pasword_hash(password):
    hashed_value = generate_password_hash(password)
    print(hashed_value)
    stored_password = 'pbkdf2:sha256:150000$XDjeRCGn$7c8451de5476ff5c9ffbb038d2128cd0042032170d8b6388f0a8a9bf86f781b4'
    print(stored_password)
    result = check_password_hash(stored_password, password)
    print(result)
    return str(result)


@app.route("/sign-in-get-without-hash", methods=['GET'])
def sign_in_get_hash():
    sign_in_get_details = request.get_json()
    email = sign_in_get_details['email']
    password = sign_in_get_details['password']

    connection = mysql.connector.connect(host="localhost", user="root", password="1234", database="sample_project_db")
    mycursor = connection.cursor()
    sql = "SELECT email,password FROM users Where email=%s AND password=%s "

    data_search = (email, password)

    mycursor.execute(sql, data_search)
    results = mycursor.fetchall()
    print(results)
    connection.commit()
    return jsonify({'results': results})


@app.route('/sign-up', methods=['POST'])
def sign_up():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        sign_up_details = request.get_json()
        firstname = sign_up_details['firstname']
        lastname = sign_up_details['lastname']
        email = sign_up_details['email']
        password = sign_up_details['password']


        regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'

        # for custom mails use: '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w+$'

        # Define a function for
        # for validating an Email
        # pass the regular expression
        # and the string in search() method
        if (re.search(regex, email)):
            print("Valid Email")

            l, u, p, d = 0, 0, 0, 0
            s = password
            if (len(s) >= 8):
                for i in s:

                    # counting lowercase alphabets
                    if (i.islower()):
                        l += 1

                        # counting uppercase alphabets
                    if (i.isupper()):
                        u += 1

                        # counting digits
                    if (i.isdigit()):
                        d += 1

                        # counting the mentioned special characters
                    if (i == '@' or i == '$' or i == '_'):
                        p += 1
            if (l >= 1 and u >= 1 and p >= 1 and d >= 1 and l + p + u + d == len(s)):
                print("Valid Password")

                hashed_value = generate_password_hash(password)

                connection = mysql.connector.connect(host="localhost", user="root", password="1234",
                                                     database="sample_project_db")
                mycursor = connection.cursor()
                query = "INSERT INTO users(first_name,last_name,email, password) VALUES (%s,%s,%s,%s)"
                val = (firstname, lastname, email, hashed_value)
                mycursor.execute(query, val)
                connection.commit()
                return jsonify({'result': result})
            else:
                print("Please Try Again")
                return "Invalid Password"


        else:
            print("Invalid Email")
            return "Enter Valid Email"





        l, u, p, d = 0, 0, 0, 0
        s = password
        if (len(s) >= 8):
            for i in s:

                # counting lowercase alphabets
                if (i.islower()):
                    l += 1

                    # counting uppercase alphabets
                if (i.isupper()):
                    u += 1

                    # counting digits
                if (i.isdigit()):
                    d += 1

                    # counting the mentioned special characters
                if (i == '@' or i == '$' or i == '_'):
                    p += 1
        if (l >= 1 and u >= 1 and p >= 1 and d >= 1 and l + p + u + d == len(s)):
            print("Valid Password")

            hashed_value = generate_password_hash(password)

            connection = mysql.connector.connect(host="localhost", user="root", password="1234",
                                                 database="sample_project_db")
            mycursor = connection.cursor()
            query = "INSERT INTO users(first_name,last_name,email, password) VALUES (%s,%s,%s,%s)"
            val = (firstname, lastname, email, hashed_value)
            mycursor.execute(query, val)
            connection.commit()
            return jsonify({'result': result})
        else:
            print("Please Try Again")
            return "Invalid Password"






@app.route("/sign-up-get", methods=['GET'])
def sign_up_get():
    try:
        connection = mysql.connector.connect(host='localhost', database='sample_project_db', user='root',
                                             password='1234')
        sql_select_Query = "select * from users"
        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        records = cursor.fetchall()
        return jsonify({'records': records})

    except Error as e:
        print("Error reading data from MySQL table", e)
    finally:
        if (connection.is_connected()):
            connection.close()
            cursor.close()
            print("MySQL connection is closed")


@app.route('/address', methods=['POST'])
def address():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        address_details = request.get_json()
        line1 = address_details['line1']
        line2 = address_details['line2']
        postalcode = address_details['postalcode']
        city = address_details['city']
        state = address_details['state']
        country = address_details['country']

        connection = mysql.connector.connect(host="localhost", user="root", password="1234",
                                             database="sample_project_db")
        mycursor = connection.cursor()
        query = "INSERT INTO  address(line1,line2,postal_code,city,state,country) VALUES (%s,%s,%s,%s,%s,%s)"
        val = (line1, line2, postalcode, city, state, country)
        mycursor.execute(query, val)
        connection.commit()
        return jsonify({'result': result})


@app.route("/address-get", methods=['GET'])
def address_get():
    try:
        connection = mysql.connector.connect(host='localhost', database='sample_project_db', user='root',
                                             password='1234')
        sql_select_Query = "select * from address"
        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        records = cursor.fetchall()
        return jsonify({'records': records})

    except Error as e:
        print("Error reading data from MySQL table", e)
    finally:
        if (connection.is_connected()):
            connection.close()
            cursor.close()
            print("MySQL connection is closed")


@app.route('/business', methods=['POST'])
def business():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        business_details = request.get_json()
        businessname = business_details['businessname']
        businessownername = business_details['businessownername']
        businessregno = business_details['businessregno']
        contactno = business_details['contactno']

        connection = mysql.connector.connect(host="localhost", user="root", password="1234",
                                             database="sample_project_db")
        mycursor = connection.cursor()
        query = "INSERT INTO  business(business_name,business_owner_name,business_reg_no,contact_no) VALUES (%s,%s,%s,%s)"
        val = (businessname, businessownername, businessregno, contactno)
        mycursor.execute(query, val)
        connection.commit()
        return jsonify({'result': result})


@app.route("/business-get", methods=['GET'])
def business_get():
    try:
        connection = mysql.connector.connect(host='localhost', database='sample_project_db', user='root',
                                             password='1234')
        sql_select_Query = "select * from business"
        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        records = cursor.fetchall()
        return jsonify({'records': records})

    except Error as e:
        print("Error reading data from MySQL table", e)
    finally:
        if (connection.is_connected()):
            connection.close()
            cursor.close()
            print("MySQL connection is closed")


@app.route('/login', methods=['POST'])
def login():
    user = get_user(request.form['username'])

    if user.check_password(request.form['password']):
        login_user(user)
        app.logger.info('%s logged in successfully', user.username)
        return redirect(url_for('index'))
    else:
        app.logger.info('%s failed to log in', user.username)
        abort(401)


if __name__ == "__main__":
    app.run(debug=True)
