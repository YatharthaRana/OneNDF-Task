from django.db import models

# Create your models here.

class UserRegister(models.Model):
    name = models.CharField(max_length = 200)
    phn = models.CharField(max_length = 10, unique = True)
    email = models.EmailField(unique=True)
    pan = models.CharField(max_length=20, unique = True)
    loantype = models.CharField(max_length = 100)
    loanamount = models.FloatField()

    def __str__ (self):
        return self.name
    