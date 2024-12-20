from django.contrib import admin
from django.urls import path, include
from AnimaBlend import views

urlpatterns = [
    path('', views.index, name='index'),
    path('home',views.home,name='home'),
    path('anime/<int:anime_id>/', views.details, name='details'),
    path('search', views.search, name='search'),
    path('anime/<int:anime_id>/play/', views.play, name='play_one'),
    path('anime/<int:anime_id>/play/<int:episode_number>/', views.play, name='play'),
    path('blog', views.blog, name='blog'),
    path('latest', views.latest, name='latest'),
]
