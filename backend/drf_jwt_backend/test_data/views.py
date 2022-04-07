from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import TestDataSerializer
from .models import TestData

# Create your views here.

@api_view(['GET', 'POST'])
def test_data_list(request):

    test_data = TestData.objects.all()

    if request.method == 'GET':
        
        serializer = TestDataSerializer(test_data, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = TestDataSerializer(data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE']) 
def test_data_detail(request,pk):

    test_data = get_object_or_404(TestData,pk=pk)

    if request.method == 'GET':
        serializer = TestDataSerializer(test_data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = TestDataSerializer(test_data, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        test_data.delete()
        return Response(status.HTTP_204_NO_CONTENT)