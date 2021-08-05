from .models import Shot
from django.urls import path
from .views import ShotListView, ShotView, ShotPostView, ShotDeleteView, ShotUpdateView

urlpatterns = [
    path('', ShotListView.as_view()),
    path('<pk>', ShotView.as_view()),
    path('upload/', ShotPostView.as_view()),
    path('delete/<pk>', ShotDeleteView.as_view()),
    path('update/<pk>', ShotUpdateView.as_view()),
]