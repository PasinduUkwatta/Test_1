from flask import Flask, request, jsonify, flash
import mysql.connector
from flask_cors import CORS, cross_origin
from mysql.connector import Error
from flask_bcrypt import Bcrypt
from werkzeug.security import generate_password_hash, check_password_hash
import re
from email_validator import validate_email, EmailNotValidError
import smtplib
from email.message import EmailMessage
import random
from flask_jwt_extended import (JWTManager, jwt_required, create_access_token, get_jwt_identity)


app = Flask(__name__)
bcrypt = Bcrypt(app)
CORS(app)
app.config['JSON_ADD_STATUS'] = True

# Database Configurations
HOST_NAME = 'localhost'
USER_NAME = 'root'
PASSWORD = '1234'
DATABASE = 'sample_project_db'

# Email Configurations
SENDER_EMAIL = "pasindu.reccelabs@gmail.com"
SENDER_APP_PASSWORD = "yjiycrivbpzxfluw"

# Setup the Flask-JWT-Extended extension
app.config['JWT_SECRET_KEY'] = 'recce-labs'  # Change this!
jwt = JWTManager(app)


@app.route('/sign-in', methods=['POST'])
def sign_in_check2():
    if request.method == 'POST':
        sign_in_details = request.get_json(silent=True, force=True)
        email = sign_in_details['email']
        password = sign_in_details['password']

    connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD, database=DATABASE)
    mycursor = connection.cursor()
    sql = "SELECT password FROM users Where email=%s LIMIT 1 "
    data_search = (email,)
    mycursor.execute(sql, data_search)
    results = mycursor.fetchone()[0]
    if not results:
        return jsonify("sign up")


    print(results)
    connection.commit()
    result = bcrypt.check_password_hash(results, password)


    if (result):
        #access_token = create_access_token(identity=email)
        #print(access_token)
        #print("OKEY")

        # Identity can be any data that is json serializable
        sql = "SELECT * FROM payment Where payment_email=%s ORDER BY payment_id DESC LIMIT 10"
        data_search = (email,)
        mycursor.execute(sql, data_search)
        results = mycursor.fetchall()

        if (results ==[]):
            return jsonify({
                            "message": "empty array",
                            "data":[[0, "0", "0", "0", "0"]]
                                })



        else:
            return jsonify(results)





        #return jsonify(results)

        #return '{} {}'.format(results,access_token),200


    else:
        print("WRONG")
        return jsonify("user details are invalid")


@app.route('/sign-up', methods=['POST'])
def sign_up_get():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        sign_up_details = request.get_json()
        firstname = sign_up_details['firstname']
        lastname = sign_up_details['lastname']
        email = sign_up_details['email']
        password = sign_up_details['password']

        hashed_value = bcrypt.generate_password_hash(password)
        connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,
                                             database=DATABASE)
        mycursor = connection.cursor()
        sql = "SELECT email FROM users Where email=%s"
        data_search = (email,)

        mycursor.execute(sql, data_search)
        results = mycursor.fetchall()
        print(results)
        if not results:
            
            regex = '(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)'

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

                    hashed_value = bcrypt.generate_password_hash(password)

                    email = EmailMessage()

                    email['from'] = 'Recce Labs Private Ltd'
                    email['to'] = sign_up_details['email']
                    email['subject'] = 'User Verification Code'


                    num1 = random.randrange(100000, 1000000)
                    str_num1 =str(num1)
                    print("First random number of length 6 is", num1)

                    email.set_content('Enter this code to Confirm Your email Address,This is your Email Verification Code : '+str(num1))

                    with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
                        # starting the smtp
                        smtp.ehlo()
                        # this is an encryption method
                        smtp.starttls()

                        smtp.login(SENDER_EMAIL, SENDER_APP_PASSWORD)
                        smtp.send_message(email)
                        print('all done')

                    #connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,
                     #                                    database=DATABASE)
                   # mycursor = connection.cursor()
                    #query = "INSERT INTO users(first_name,last_name,email, password) VALUES (%s,%s,%s,%s)"
                    #val = (firstname, lastname, sign_up_details['email'], hashed_value)
                    #mycursor.execute(query, val)
                    #connection.commit()
                    #access_token = create_access_token(identity=sign_up_details['email'])

                    #return jsonify('{message: OKEY,code:'+str(num1)+'}')
                    return jsonify({
                    "message": "OKEY",
                    "code": str_num1
                    })

                    
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

                hashed_value = bcrypt.generate_password_hash(password)

                connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,database=DATABASE)
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
            print("user already exists in the database")
            return 'Please enter another email'

    connection.commit()
    return jsonify({'results': results})



    

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

        connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,database=DATABASE)
        mycursor = connection.cursor()
        query = "INSERT INTO  address(line1,line2,postal_code,city,state,country) VALUES (%s,%s,%s,%s,%s,%s)"
        val = (line1, line2, postalcode, city, state, country)
        mycursor.execute(query, val)
        connection.commit()
        return jsonify({'result': result})


@app.route('/payment', methods=['POST'])
def payment():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        payment_details = request.get_json()
        paymenttype = payment_details['paymenttype']
        paymentamount = payment_details['paymentamount']
        paymentemail = payment_details['paymentemail']
        paymentownername = payment_details['paymentownername']
        
        connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,database=DATABASE)
        mycursor = connection.cursor()

        sql = "SELECT email FROM users Where email=%s"
        data_search = (paymentemail,)

        mycursor.execute(sql, data_search)
        results = mycursor.fetchall()
      
        if not results:
        	return jsonify("Enter Valid email you Sign In")

        else:
        	query = "INSERT INTO  payment(payment_type,payment_amount,payment_email,payment_owner_name) VALUES (%s,%s,%s,%s)"
        	val = (paymenttype,paymentamount, paymentemail, paymentownername)
        	mycursor.execute(query, val)
        	connection.commit()
        	return jsonify("Payment Details successfully Entered Into the Database")

@app.route('/business', methods=['POST'])
def business():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        business_details = request.get_json()
        businessname = business_details['businessname']
        businessownername = business_details['businessownername']
        businessregno = business_details['businessregno']
        contactno = business_details['contactno']

        connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,
                                             database=DATABASE)
        mycursor = connection.cursor()
        query = "INSERT INTO  business(business_name,business_owner_name,business_reg_no,contact_no) VALUES (%s,%s,%s,%s)"
        val = (businessname, businessownername, businessregno, contactno)
        mycursor.execute(query, val)
        connection.commit()
        return jsonify({'result': result})

@app.route('/confirm', methods=['POST'])
def confirm_details():
    result = [{'msg': 'success'}, {'stat': '200 ok'}]
    if request.method == 'POST':
        confirm_details = request.get_json()
        firstname = confirm_details['firstname']
        lastname = confirm_details['lastname']
        email = confirm_details['email']
        password = confirm_details['password']
        hashed_value = bcrypt.generate_password_hash(password)
     

        connection = mysql.connector.connect(host=HOST_NAME, user=USER_NAME, password=PASSWORD,database=DATABASE)
        mycursor = connection.cursor()
        query = "INSERT INTO users(first_name,last_name,email, password) VALUES (%s,%s,%s,%s)"
        val = (firstname, lastname, email, hashed_value)
        mycursor.execute(query, val)
        connection.commit()
        return jsonify({'result': result})


@app.route('/jwt-generate', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    email = request.json.get('email', None)
    password = request.json.get('password', None)
    if not email:
        return jsonify({"msg": "Missing email parameter"}), 400
    if not password:
        return jsonify({"msg": "Missing password parameter"}), 400


    # Identity can be any data that is json serializable
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token), 200


# Protect a view with jwt_required, which requires a valid access token
# in the request to access.
@app.route('/protected', methods=['POST'])
@jwt_required
def protected():
    # Access the identity of the current user with get_jwt_identity
    #current_user = get_jwt_identity()
    #return jsonify(logged_in_as=current_user), 200
    return jsonify("Okey"), 200


if __name__ == "__main__":
    app.run(debug=True)
