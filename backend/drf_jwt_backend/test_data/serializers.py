from rest_framework import serializers
from . import models
from .models import TestData


class TestDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestData
        fields = ['id', 'environment', 'material', 'corrosion_rate', 'localized', 'environment_id', 'material_id']
        depth = 2 #need to be able to read --> material --> family from foreign keys

    environment_id = serializers.IntegerField(write_only=True)
    material_id = serializers.IntegerField(write_only=True)


