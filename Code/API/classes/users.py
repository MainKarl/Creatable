from sqlalchemy import Column, Integer, String
import datetime
import bcrypt
import jwt

from constants import get_app, get_db

class users(get_db().Model):
    __tablename__ = "users"
    id = Column('user_id', Integer, primary_key = True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)
    password = Column(String, nullable=False)
    role = Column(Integer, nullable=False)
    img = Column(String, nullable=True)

    def __init__(self, username, email, password, role, img):
        self.username = username
        self.email = email
        self.password = bcrypt.hashpw(password.encode('utf8'), bcrypt.gensalt()).decode()
        self.role = role
        self.img = img

    def verify_password(self, password):
        return bcrypt.checkpw(password.encode('utf8'), self.password.encode('utf8'))

    def encode_auth_token(self, user_id, role) -> bytes:
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=5),
                'iat': datetime.datetime.utcnow(),
                'sub': user_id,
                'rle': role
            }
            return jwt.encode(
                payload,
                get_app().secret_key,
                algorithm='HS256'
            )
        except Exception as e:
            print(e)
            return 0
    
    def decode_auth_token(auth_token):
        try:
            payload = jwt.decode(auth_token, get_app().secret_key, algorithms='HS256')
            return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'
        
    def decode_role_auth_token(auth_token):
        try:
            payload = jwt.decode(auth_token, get_app().secret_key, algorithms='HS256')
            return payload['rle']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'