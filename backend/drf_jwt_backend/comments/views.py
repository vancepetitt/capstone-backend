from django.shortcuts import render, get_object_or_404

# Create your views here.

from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer


@api_view(['GET', 'POST'])
def comments_list(request):

    comments = Comment.objects.all()

    if request.method == 'GET':
        
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE']) 
def comment_detail(request,pk):

    comment = get_object_or_404(Comment,pk=pk)

    if request.method == 'GET':
        serializer = CommentSerializer(comment)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'PUT':
        serializer = CommentSerializer(comment, data=request.data) 
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == 'DELETE':
        comment.delete()
        return Response(status.HTTP_204_NO_CONTENT)