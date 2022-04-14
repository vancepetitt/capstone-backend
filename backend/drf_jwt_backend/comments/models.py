from django.db import models
from django.contrib.auth.models import User
from environments.models import Environments


# Create your models here.

class Comment(models.Model):
    environment = models.ForeignKey(Environments, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    text = models.CharField(max_length = 255)