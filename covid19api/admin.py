from django.contrib import admin
from .models import DistrictData, DailyData, BangladeshData

# Register your models here.
admin.site.register(DistrictData)
admin.site.register(DailyData)
admin.site.register(BangladeshData)
