from django.shortcuts import render
from rest_framework import generics
from rest_framework.viewsets import ReadOnlyModelViewSet

from django.shortcuts import get_object_or_404
from video.models import Movie, Genre
from video.serializers import MovieSerializer
# Create your views here.

# class MovieListAPIView(generics.ListAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer
    
# class MovieDetailAPIView(generics.RetrieveAPIView):
#     queryset = Movie.objects.all()
#     serializer_class = MovieSerializer
#     lookup_field = 'uu_id'


class MovieViewSet(ReadOnlyModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    lookup_field = 'uu_id'


class CategoryAPIView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        slug = self.kwargs.get('slug')
        movies = Movie.objects.filter(category__slug=slug)
        return movies


class GenreOrderAPIView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        slug = self.kwargs.get('slug')
        get_object_or_404(Genre, url=slug)
        movies = Movie.objects.filter(genres__url=slug).prefetch_related('genres')
        return movies


class SearchAPIView(generics.ListAPIView):
    serializer_class = MovieSerializer

    def get_queryset(self):
        name = self.request.GET.get('key')
        movies = Movie.objects.filter(title__icontains=name)
        return movies