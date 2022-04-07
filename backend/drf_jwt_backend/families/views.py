from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import FamilySerializer
from .models import Family

# Create your views here.
@api_view(['GET', 'POST'])
def families_list(request):

    families = Family.objects.all()

    if request.method == 'GET':
        
        serializer = FamilySerializer(families, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = FamilySerializer(data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE']) 
def family_detail(request,pk):

    family = get_object_or_404(Family,pk=pk)

    if request.method == 'GET':
        serializer = FamilySerializer(family)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = FamilySerializer(family, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        family.delete()
        return Response(status.HTTP_204_NO_CONTENT)