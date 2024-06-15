class User:
    def __init__(self, name, email, interest):
        self.name = name
        self.email = email
        self.interest = interest

    def to_dict(self):
        return {
            "name": self.name,
            "email": self.email,
            "interest": self.interest
        }