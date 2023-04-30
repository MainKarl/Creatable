from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from classes.base import Base
from constants import get_character_status_table

class statuses(Base):
    __tablename__ = "status"
    id = Column('status_id', Integer, primary_key = True)
    name = Column(String)
    characters = relationship('characters', secondary = get_character_status_table(), back_populates = 'statuses')

    def get(self):
        return {
            'status_id': self.id,
            'name': self.name
        }

    def __init__(self, name):
        self.name = name