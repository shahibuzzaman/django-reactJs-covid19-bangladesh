from django.db import models


class DistrictData(models.Model):
    districtName = models.CharField(max_length=100, unique=True)
    eName = models.CharField(max_length=100, unique=True)

    lat = models.FloatField()

    long = models.FloatField()
    totalCases = models.IntegerField()
    casesToday = models.IntegerField()
    casesYesterday = models.IntegerField()
    updatedAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.districtName


class DailyData(models.Model):

    cases = models.IntegerField()
    deaths = models.IntegerField()
    recovered = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return str(self.cases)


class BangladeshData(models.Model):

    totalCases = models.IntegerField()
    casesToday = models.IntegerField()
    totalDeaths = models.IntegerField()
    deathsToday = models.IntegerField()
    totalRecovered = models.IntegerField()
    RecoveredToday = models.IntegerField()
    totalTests = models.IntegerField()
    testsToday = models.IntegerField()
    updatedAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return str(self.totalCases)
