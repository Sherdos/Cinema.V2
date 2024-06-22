from django.shortcuts import render
from rest_framework import generics
from rest_framework.viewsets import ReadOnlyModelViewSet

from django.shortcuts import get_object_or_404
from video.models import Movie, Genre
from video.serializers import MovieSerializer,GenreSerializer
# Create your views here.

class MovieViewSet(ReadOnlyModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'uu_id'


class FilterByGenreAPIView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        pk = self.kwargs.get('pk')
        get_object_or_404(Genre, pk=pk)
        movies = Movie.objects.filter(genre_id=pk).prefetch_related('genre')
        return movies


class SearchAPIView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        name = self.request.GET.get('key')
        movies = Movie.objects.filter(title__icontains=name)
        return movies


class GenreListAPIView(generics.ListAPIView):
    serializer_class = GenreSerializer
    queryset = Genre.objects.all()