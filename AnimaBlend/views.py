from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Episode , Anime
from django.db.models import Count

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def index(request):
    return render(request, 'AnimaBlend/index.html')

def play(request):
    return render(request,'AnimaBlend/play.html')

def details(request, anime_id):
    anime = get_object_or_404(Anime, pk=anime_id)
    return render(request,'AnimaBlend/details.html', {'anime': anime})

def search(request):
    search = request.GET.get('search', '')
    animes = Anime.objects.filter(title__icontains=search)
    params = {'animes': animes}
    return render(request, 'AnimaBlend/search.html', params)