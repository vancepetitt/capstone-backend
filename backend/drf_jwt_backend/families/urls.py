from django.urls import path
from . import views

urlpatterns = [
    path('', views.families_list),
    path('<int:pk/>', views.family_detail),
]