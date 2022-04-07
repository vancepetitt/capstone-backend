from django.shortcuts import get_object_or_404, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import MaterialSerializer
from .models import Materials

# Create your views here.

@api_view(['GET', 'POST']) 
def materials_list(request):

    materials = Materials.objects.all()

    if request.method == 'GET':

        # family_param = request.query_params.get('families') 
        
        # if family_param == 'Austenitic SS':
        #     materials = materials.filter(family__id=1) 
        # elif family_param == 'NiCrMo Alloys':
        #     materials = materials.filter(family__id=2)
        # else:
        materials = Materials.objects.all()
        
        serializer = MaterialSerializer(materials, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = MaterialSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def material_detail(request,pk):

    material = get_object_or_404(Materials,pk=pk)

    if request.method == 'GET':
        serializer = MaterialSerializer(material)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = MaterialSerializer(material, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        material.delete()
        return Response(status.HTTP_204_NO_CONTENT) 