from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

class Anime(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    total_episodes = models.PositiveIntegerField(default=0)
    thumbnail = models.CharField(max_length=200)

    def __str__(self):
        return self.title

class Episode(models.Model):
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    episode_number = models.PositiveIntegerField()
    video_sub = models.CharField(max_length=200,blank=True)
    video_dub = models.CharField(max_length=200,blank=True)

    class Meta:
        ordering = ['episode_number']  

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.anime.total_episodes = Episode.objects.filter(anime=self.anime).count()
        self.anime.save()

    def __str__(self):
        return f"{self.anime.title} - Episode {self.episode_number}: {self.title}"


