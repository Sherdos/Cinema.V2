from django.shortcuts import render
from rest_framework import generics

from video.models import Movie
from video.serializers import MovieSerializer
# Create your views here.

class MovieListAPIView(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
