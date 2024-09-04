from django.shortcuts import render, HttpResponse
from .models import Episode , Anime
from django.db.models import Count

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def index(request):
    return render(request, 'AnimaBlend/index.html')

def play(request):
    return render(request,'AnimaBlend/play.html')

def details(request):
    return render(request,'AnimaBlend/details.html')

def search(request):
    search = request.GET.get('search', '')
    animes = Anime.objects.filter(title__icontains=search).annotate(num_episodes=Count('episode'))
    num_animes = animes.count()
    params = {'animes': animes, 'animes_count': num_animes}
    return render(request, 'AnimaBlend/search.html', params)