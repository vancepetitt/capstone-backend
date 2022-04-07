from django.urls import path
from . import views


urlpatterns = [
    path('', views.test_data_list),
    path('<int:pk>/', views.test_data_detail),
]