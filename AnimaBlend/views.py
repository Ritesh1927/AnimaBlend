from django.shortcuts import render, HttpResponse, get_object_or_404
from .models import Episode , Anime
from django.db.models import Count
from django.db import models
import random



# Create your views here.

slider_animes = ["One Piece", "Attack on Titan", "Death Note", "Haikyuu season 1", "Vinland Saga Season 1"]
monthly_trendings = ["Attack on Titan", "Death Note", "Haikyuu season 1", "Vinland Saga Season 1", "Naruto Shippuden", "Naruto", "Hunter x Hunter", "Grappler Baki: The Ultimate Fighter", "Jujutsu Kaisen season 1", "One Piece"]
best_of_all_times = ["Naruto Shippuden", "Naruto", "Hunter x Hunter", "Grappler Baki: The Ultimate Fighter", "Jujutsu Kaisen season 1", "One Piece", "Attack on Titan", "Death Note", "Haikyuu season 1", "Vinland Saga Season 1"]

def fetch_random_anime():
    total_anime = Anime.objects.aggregate(max_id=models.Max('id'))['max_id']
    
    if total_anime:
        random_ids = random.sample(range(1, total_anime + 1), 10)
        random_anime = Anime.objects.filter(id__in=random_ids).distinct()  # Fetch distinct random records
    else:
        random_anime = Anime.objects.none()  # In case there are no records
    
    return random_anime


def home(request):
    for i in range(5) :
        slider_animes[i] = Anime.objects.get(title=slider_animes[i])
    
    for i in range(10) :
        monthly_trendings[i] = Anime.objects.get(title=monthly_trendings[i])
        best_of_all_times[i] = Anime.objects.get(title=best_of_all_times[i])

    random_anime = fetch_random_anime()
    alphabet = [chr(i) for i in range(65, 91)]
    return render(request,'AnimaBlend/home.html', {'slider_animes': slider_animes, 'monthly': monthly_trendings, 'all_time':best_of_all_times, 'random_anime':random_anime, 'alphabet': alphabet})

def index(request):
    return render(request, 'AnimaBlend/index.html')

def play(request, anime_id, episode_number=1):
    anime = get_object_or_404(Anime, pk=anime_id)
    episode = get_object_or_404(Episode, anime=anime, episode_number=episode_number)
    episodes = Episode.objects.filter(anime=anime).order_by('episode_number')
    alphabet = [chr(i) for i in range(65, 91)]
    return render(request,'AnimaBlend/play.html', {'anime': anime, 'current_episode': episode, 'episodes': episodes, 'alphabet':alphabet})

def details(request, anime_id):
    anime = get_object_or_404(Anime, pk=anime_id)
    return render(request,'AnimaBlend/details.html', {'anime': anime})

def search(request):
    search_query = request.GET.get('search', '')
    alphabet_query = request.GET.get('query','')

    if alphabet_query:
        animes = Anime.objects.filter(title__istartswith=alphabet_query)
    # normal search
    else:
        animes = Anime.objects.filter(title__icontains=search_query)

    params = {'animes': animes}
    return render(request, 'AnimaBlend/search.html', params)

def blog(request):
    return render(request, 'AnimaBlend/blog.html')

# admin_sub-domains

