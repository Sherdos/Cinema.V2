from django.urls import path

from slider.views import SliderAPIView

urlpatterns = [
    path('', SliderAPIView.as_view())
]