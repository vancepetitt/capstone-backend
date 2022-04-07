from django.db import models

#Create models here

class Family(models.Model):
    family = models.CharField(max_length=30)
