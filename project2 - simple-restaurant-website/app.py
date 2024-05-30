from flask import Flask, request, jsonify, render_template, session, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import (
    JWTManager,
    create_access_token,
)
from dotenv import load_dotenv
import os
import jwt as jt

load_dotenv()

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("SQLALCHEMY_DATABASE_URI", 'sqlite:///user.db')
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY", 'secret-string')
app.config["JWT_SECRET_KEY"] = os.environ.get("JWT_SECRET_KEY", 'jwt-secret-string')

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)


@app.route("/dashboard")
def dashboard():
    if "token" not in session:
        return redirect(url_for("auth"))
    token = jt.decode(
        session['token'], os.environ.get("JWT_SECRET_KEY"), algorithms=["HS256"]
    )

    user = User.query.filter_by(email=token["sub"]).first()
    return render_template("dashboard.html", user=user)


@app.route("/")
def auth():
    if "token" in session:
        return redirect(url_for("dashboard"))
    return render_template("auth.html")


@app.route("/signup", methods=["POST"])
def signup():
    if "token" in session:
        return redirect(url_for("dashboard"))
    try:
        data = request.get_json()
        name = data["name"]
        email = data["email"]
        password = bcrypt.generate_password_hash(data["password"]).decode("utf-8")

        if User.query.filter_by(email=email).first():
            return jsonify({"message": "User already exists", "status_code": 400}), 400

        new_user = User(name=name, email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        return (
            jsonify({"message": "User created successfully", "status_code": 200}),
            200,
        )
    except Exception as e:
        return jsonify({"message": str(e), "status_code": 500}), 500


@app.route("/login", methods=["POST"])
def login():
    if "token" in session:
        return redirect(url_for("dashboard"))
    try:
        data = request.get_json()
        email = data["email"]
        password = data["password"]

        user = User.query.filter_by(email=email).first()

        if not user or not bcrypt.check_password_hash(user.password, password):
            return (
                jsonify({"message": "Invalid email or password", "status_code": 400}),
                400,
            )

        access_token = create_access_token(identity=email)

        session["token"] = access_token

        return (
            jsonify(
                {
                    "message": "Login Success",
                    "status_code": 200,
                }
            ),
            200,
        )
    except Exception as e:
        return jsonify({"message": str(e), "status_code": 500}), 500


@app.route("/logout")
def logout():
    if "token" in session:
        session.pop("token", None)
    return redirect(url_for("auth"))


if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
