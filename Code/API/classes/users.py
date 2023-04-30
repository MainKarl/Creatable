from sqlalchemy import Column, Integer, String
import datetime
import bcrypt
import jwt

from classes.base import Base
from constants import get_app

class users(Base):
    __tablename__ = "users"
    id = Column('user_id', Integer, primary_key = True)
    username = Column(String)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role = Column(Integer, nullable=False)

    def __init__(self, username, email, password, role):
        self.username = username
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt()).decode()
        self.role = role

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf8'), self.password.encode('utf8'))

    def encode_auth_token(self, user_id, role):
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id
            }
            return jwt.encode(
                payload,
                get_app().secret_key,
                algorithm='HS256'
            )
        except Exception as e:
            return e
    
    def decode_auth_token(auth_token):
        try:
            payload = jwt.decode(auth_token, get_app().secret_key, algorithms='HS256')
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'