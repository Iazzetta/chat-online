from django.urls import path

from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('create-room', views.create_room, name="create_room"),
    path('<pk>', views.RoomDetailView.as_view(), name="room_detail"),
    path('<pk>/send', views.send_message, name="send_message"),
]