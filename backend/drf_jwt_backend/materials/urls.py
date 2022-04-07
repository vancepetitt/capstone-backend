from django.urls import path
from . import views


urlpatterns = [
    path('', views.materials_list),
    path('<int:pk>/', views.material_detail),
]