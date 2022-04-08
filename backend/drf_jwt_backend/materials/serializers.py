from rest_framework import serializers
from . import models
from .models import Materials


class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Materials
        fields = ['designation', 'family', 'family_id']
        depth = 1 #allows for display of family information

    family_id = serializers.IntegerField(write_only=True)