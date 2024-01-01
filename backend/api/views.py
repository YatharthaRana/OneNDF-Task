from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework import status

# Create your views here.

@api_view(['GET','POST'])
def UserRegisterList(request):
    if request.method == 'POST':
        serializer_login = UserRegisterSerializer(data = request.data)
        if serializer_login.is_valid():
            serializer_login.save()
            return Response(serializer_login.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer_login.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        user = UserRegister.objects.all()
        serializer = UserRegisterSerializer(user, many =True)
        return Response(serializer.data)    