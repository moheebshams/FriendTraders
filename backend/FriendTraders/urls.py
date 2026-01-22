from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/blogs/', views.blog_list, name='blog_list'),
    path('api/blogs/<int:pk>/', views.blog_detail, name='blog_detail'),
    path('api/gallery/', views.gallery_list, name='gallery_list'),
    path('api/gallery/<int:pk>/', views.gallery_detail, name='gallery_detail'),
]
