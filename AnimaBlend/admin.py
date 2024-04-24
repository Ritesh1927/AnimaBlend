from django.contrib import admin

# Register your models here.

from .models import Anime
from .models import Episode

admin.site.register(Anime)
admin.site.register(Episode)