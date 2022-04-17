from rest_framework import serializers
from . import models
from .models import Environments


class EnvironmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Environments
        fields = ['id', 'name', 'concentration', 'temperature', 'duration']