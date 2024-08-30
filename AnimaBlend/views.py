from django.shortcuts import render, HttpResponse
from .models import Episode , Anime

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def index(request):
    return render(request, 'AnimaBlend/index.html')

def play(request):
    return render(request,'AnimaBlend/play.html')

def details(request):
    return render(request,'AnimaBlend/details.html')