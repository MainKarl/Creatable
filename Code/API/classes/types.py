from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from constants import get_character_type_table, get_db

class types(get_db().Model):
    __tablename__ = 'types'
    id = Column('type_id', Integer, primary_key = True)
    name = Column(String)
    characters = relationship('characters', secondary = get_character_type_table(), back_populates = 'types')

    def get(self):
        return {
            'id': self.id,
            'value': self.name,
            'selected': False
        }

    def __init__(self, name):
        self.name = name