from django.db import models

# Create your models here.

class Environments(models.Model):
    name = models.CharField(max_length=30)
    concentration = models.IntegerField()
    temperature = models.IntegerField()
    duration = models.IntegerField()

    
