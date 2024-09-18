from django.contrib import admin
from django.urls import path, include
from AnimaBlend import views

urlpatterns = [
    path('', views.index, name=''),
    path('home',views.home,name='home'),
    path('play', views.play, name='play'),
    path('anime/<int:anime_id>/', views.details, name='details'),
    path('search', views.search, name='search'),
]
