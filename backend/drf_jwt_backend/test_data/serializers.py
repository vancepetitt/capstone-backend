from rest_framework import serializers
from . import models
from .models import TestData


class TestDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestData
        fields = ['environment', 'material', 'corrosion_rate', 'localized']
        depth = 2 #need to be able to read --> material --> family from foreign keys



