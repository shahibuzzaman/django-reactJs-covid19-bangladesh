from rest_framework import serializers
from .models import DistrictData, DailyData, BangladeshData


class DistrictDataSerializer(serializers.ModelSerializer):

    # updatedAt = serializers.DateField(
    #     format="%Y-%m-%d", input_formats=['%Y-%m-%d', 'iso-8601'])

    class Meta:
        model = DistrictData
        fields = '__all__'


class DailyDataSerializer(serializers.ModelSerializer):

    date = serializers.DateField(
        format="%Y-%m-%d", input_formats=['%Y-%m-%d', 'iso-8601'])

    class Meta:
        model = DailyData
        fields = '__all__'


class BangladeshDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = BangladeshData
        fields = ['totalCases', 'casesToday', 'totalDeaths', 'deathsToday',
                  'totalRecovered', 'RecoveredToday', 'totalTests', 'testsToday', 'updatedAt']
