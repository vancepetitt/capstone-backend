from django.db import models

from families.models import Family

# Create your models here.

class Materials(models.Model):
    designation = models.CharField(max_length=30)
    family = models.ForeignKey(Family, on_delete=models.CASCADE)
    
