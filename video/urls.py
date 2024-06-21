from django.urls import include, path
from rest_framework import routers

from video.views import FilterByGenreAPIView,SearchAPIView,MovieViewSet,GenreListAPIView

router = routers.DefaultRouter()
router.register(r'movie', MovieViewSet, basename='movie')


urlpatterns = [
    path('', include(router.urls)),
    path('genre/<slug:slug>', FilterByGenreAPIView.as_view(), name='order_genre'),
    path('search/', SearchAPIView.as_view()),
    path('all/genre/', GenreListAPIView.as_view())

]