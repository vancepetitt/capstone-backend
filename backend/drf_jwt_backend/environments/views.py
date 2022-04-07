from django.shortcuts import render
from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import EnvironmentSerializer
from .models import Environments

# Create your views here.

@api_view(['GET', 'POST'])
def environments_list(request):

    environments = Environments.objects.all()

    if request.method == 'GET':
        
        serializer = EnvironmentSerializer(environments, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = EnvironmentSerializer(data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE']) 
def environment_detail(request,pk):

    environment = get_object_or_404(Environments,pk=pk)

    if request.method == 'GET':
        serializer = EnvironmentSerializer(environment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = EnvironmentSerializer(environment, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        environment.delete()
        return Response(status.HTTP_204_NO_CONTENT)