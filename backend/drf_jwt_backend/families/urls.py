from django.urls import path
from . import views

urlpatterns = [
    path('', views.families_list),
    path('all/', views.family_detail),
]