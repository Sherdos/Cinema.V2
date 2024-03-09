from django.urls import path
from video import views

urlpatterns = [
    path('movie/', views.MovieListAPIView.as_view())
]