from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, DestroyAPIView, UpdateAPIView
from rest_framework import permissions
from .models import Shot
from .serializers import ShotSerializer

class ShotListView(ListAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Shot.objects.all()
    serializer_class = ShotSerializer
    pagination_class = None

class ShotView(RetrieveAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Shot.objects.all()
    serializer_class = ShotSerializer

class ShotPostView(ListCreateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Shot.objects.all()
    serializer_class = ShotSerializer

class ShotDeleteView(DestroyAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Shot.objects.all()
    serializer_class = ShotSerializer

class ShotUpdateView(UpdateAPIView):
    permission_classes = (permissions.AllowAny, )
    queryset = Shot.objects.all()
    serializer_class = ShotSerializer
