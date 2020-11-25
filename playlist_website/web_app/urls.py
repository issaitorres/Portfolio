from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('tutorial/', views.tutorial, name='tutorial'),
    path('search/', views.search, name='search'),
]