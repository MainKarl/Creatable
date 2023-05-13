import urllib.request
import glob

from classes.users import users as us
from classes.skills import skills as sk
from classes.statuses import statuses as st
from classes.passives import passives as pa
from classes.types import types as ty

def get_join_passive(passives):
    list = []
    passive: pa
    for passive in passives:
        list.append(passive.get())
    return list
def get_join_type(types):
    list = []
    type: ty
    for type in types:
        list.append(type.get())
    return list
def get_join_status(statuses):
    list = []
    status: st
    for status in statuses:
        list.append(status.get())
    return list
def get_join_skill(skills):
    list = []
    skill: sk
    for skill in skills:
        list.append(skill.get())
    return list

def verify_image(file_name: str, extension: str):
    verification = True
    index = 1
    image_name = file_name + extension
    image_name = image_name.replace(' ', '_')
    while verification:
        if (glob.glob("/var/www/html/img/" + image_name)):
            if (index != 1):
                image_name = str(index) + image_name[1:]
            else:
                image_name = str(index) + image_name
        else:
            verification = False
        index += 1

    return image_name

def download_image(url: str, file_name: str, extension: str):
    urlLink = "/var/www/html/img/" + verify_image(file_name, extension)
    url_path = "http://144.217.14.182/img/" + verify_image(file_name, extension)
    urllib.request.urlretrieve(url, urlLink)
    return url_path.replace("/", "//")

def get_extension(url: str):
    file_name = url[url.rfind("/"):]
    return file_name[file_name.rfind("."):]

def verify_token(token):
    if token:
        resp = us.decode_auth_token(token)
        if not isinstance(resp, str):
            return True
        else:
            return False
    else:
        return False

def get_user_id(token):
    if token:
        resp = us.decode_auth_token(token)
        if not isinstance(resp, str):
            return resp
        else:
            return 0
    else:
        return 0