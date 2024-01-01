from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(UserRegister)
class UserRegisterAdmin(admin.ModelAdmin):
    list_display = ['name','phn','email','pan','loantype','loanamount']