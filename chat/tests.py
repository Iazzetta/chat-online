from django.test import TestCase
# from .models import Room, Message


# class AnimalTestCase(TestCase):
#     def setUp(self):
#         pass

#     def test_create_room(self):
#         room = Room.objects.create(name="Test Room")
#         self.assertEqual(room.name, "Test Room")
#         self.assertEqual(room.messages.count(), 0)
    
#     def test_create_room_and_add_messages(self):
#         room = Room.objects.create(name="Test Room 2")
#         self.assertEqual(room.name, "Test Room 2")
#         self.assertEqual(room.messages.count(), 0)

#         message1 = Message.objects.create(text = "Eae")
#         message2 = Message.objects.create(text = "Salve, beleza?")
#         message3 = Message.objects.create(text = "Tranquilão!")

#         room.messages.add(*[message1, message2, message3])
#         self.assertEqual(room.messages.count(), 3)