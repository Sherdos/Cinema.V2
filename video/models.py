from django.db import models
from django.contrib.auth.models import User

# Create your models here.
import uuid

from Movie import settings

class Movie(models.Model):
    """Model definition for Movie."""
    
    uu_id = models.UUIDField(default=uuid.uuid4)
    title = models.CharField(max_length=255, verbose_name = 'название')
    description = models.TextField( verbose_name = 'описание')
    release_date = models.DateField( verbose_name = 'дата выхода')
    genre = models.ForeignKey('video.Genre', on_delete = models.CASCADE,  verbose_name = 'жанр', related_name='genre')
    image = models.ImageField(upload_to='movie_images/')
    video = models.FileField(upload_to='movie_videos/')
    movie_views = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    # TODO: Define fields here

    class Meta:
        """Meta definition for Movie."""

        verbose_name = 'Фильм'
        verbose_name_plural = 'Фильм'

    # TODO: Define custom methods here

class Genre(models.Model):
    """Model definition for Genre."""
    title = models.CharField(max_length=255, verbose_name = 'название')
    slug = models.CharField(max_length=255, verbose_name = 'путь')
    

    # TODO: Define fields here

    class Meta:
        """Meta definition for Genre."""

        verbose_name = 'Жанр'
        verbose_name_plural = 'Жанры'

    def __str__(self):
        return self.title
    
class MovieList(models.Model):
    owner_user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
    )
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

