from django.shortcuts import render
from rest_framework import generics

from slider.models import Slider
from slider.serializers import SliderSerializer
# Create your views here.

class SliderAPIView(generics.ListAPIView):
    queryset = Slider.objects.all().order_by('id')
    serializer_class = SliderSerializer