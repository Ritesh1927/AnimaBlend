from django.shortcuts import render, HttpResponse
from .models import Episode , Anime

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def index(request):
    return render(request, 'AnimaBlend/index.html')

def play(request):
    anime = Anime.object.get(title='Vinland Saga Season 1')
    episode = Episode.object.filter(anime=anime)
    return render(request,'AnimaBlend/play.html',{'episodes':episode})

def details(request):
    return render(request,'AnimaBlend/details.html')