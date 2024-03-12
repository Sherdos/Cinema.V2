from rest_framework import serializers
from .models import Slider, MediaImage

class MediaImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MediaImage
        fields = ('img',)  # Specify fields you want to include from MediaImage

class SliderSerializer(serializers.ModelSerializer):
    media_slider = MediaImageSerializer(many=True, read_only=True)

    class Meta:
        model = Slider
        fields = '__all__'