from django.shortcuts import render

from .models import DistrictData, DailyData, BangladeshData
from rest_framework import viewsets
from .serializers import DistrictDataSerializer, DailyDataSerializer, BangladeshDataSerializer


class DistrictDataViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DistrictData.objects.all()
    serializer_class = DistrictDataSerializer


class DailyDataViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DailyData.objects.all()
    serializer_class = DailyDataSerializer


class BangladeshDataViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BangladeshData.objects.all()
    serializer_class = BangladeshDataSerializer
