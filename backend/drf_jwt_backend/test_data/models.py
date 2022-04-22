from django.db import models
from materials.models import Materials
from environments.models import Environments
from families.models import Family
from django.contrib.auth.models import User

# Create your models here.

class TestData(models.Model):
    environment = models.ForeignKey(Environments, on_delete=models.CASCADE)
    material = models.ForeignKey(Materials, on_delete=models.CASCADE)
    corrosion_rate = models.DecimalField(max_digits=10, decimal_places=2)
    localized = models.CharField(max_length = 255)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 

