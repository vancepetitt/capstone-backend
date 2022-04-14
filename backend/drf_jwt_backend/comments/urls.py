from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.comments_list),
    path('<int:pk>/', views.comment_detail),
]