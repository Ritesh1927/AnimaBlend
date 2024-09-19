from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Episode , Anime
from django.db.models import Count

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def index(request):
    return render(request, 'AnimaBlend/index.html')

def play(request, anime_id, episode_num=1):
    anime = get_object_or_404(Anime, pk=anime_id)
    episode = get_object_or_404(Episode, anime=anime, episode_number=episode_num)
    episodes = Episode.objects.filter(anime=anime).order_by('episode_number')
    return render(request,'AnimaBlend/play.html', {'anime': anime, 'current_episode': episode, 'episodes': episodes})

def details(request, anime_id):
    anime = get_object_or_404(Anime, pk=anime_id)
    return render(request,'AnimaBlend/details.html', {'anime': anime})

def search(request):
    search = request.GET.get('search', '')
    animes = Anime.objects.filter(title__icontains=search)
    params = {'animes': animes}
    return render(request, 'AnimaBlend/search.html', params)