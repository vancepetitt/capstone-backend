from rest_framework import serializers
from . import models
from .models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'text', 'environment', 'user', 'environment_id', 'user_id']
        depth = 1

        environment_id = serializers.IntegerField(write_only=True)
        user_id = serializers.IntegerField(write_only=True)