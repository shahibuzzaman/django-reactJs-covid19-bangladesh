from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from .views import DistrictDataViewSet, DailyDataViewSet, BangladeshDataViewSet

router = routers.DefaultRouter()
router.register('district', DistrictDataViewSet)
router.register('daily', DailyDataViewSet)
router.register('bangladesh', BangladeshDataViewSet)

urlpatterns = router.urls
