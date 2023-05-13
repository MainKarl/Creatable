from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from classes.base import Base
from constants import get_character_type_table

class types(Base):
    __tablename__ = 'types'
    id = Column('type_id', Integer, primary_key = True)
    name = Column(String)
    characters = relationship('characters', secondary = get_character_type_table(), back_populates = 'types')

    def get(self):
        return {
            'type_id': self.id,
            'name': self.name
        }

    def __init__(self, name):
        self.name = name