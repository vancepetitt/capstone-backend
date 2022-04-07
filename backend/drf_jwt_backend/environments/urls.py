from django.urls import path
from . import views

urlpatterns = [
    path('', views.environments_list),
    path('<int:pk/>', views.environment_detail),
]