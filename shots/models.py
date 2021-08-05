from django.db import models
from django.db.models.deletion import CASCADE, DO_NOTHING
from django.utils.timezone import now
from accounts.models import UserAccount


class Comment(models.Model):
    creator = models.ForeignKey(UserAccount, on_delete=CASCADE)
    comment = models.CharField(max_length=300)

    def __str__(self):
        return self.comment

class Like(models.Model):
    creator = models.ForeignKey(UserAccount, on_delete=CASCADE)

    def __str__(self):
        return self.creator

class Save(models.Model):
    creator = models.ForeignKey(UserAccount, on_delete=CASCADE)

    def __str__(self):
        return self.creator

class Seen(models.Model):
    creator = models.ForeignKey(UserAccount, on_delete=CASCADE)

    def __str__(self):
        return self.creator

class Shot(models.Model):
    class Toolapp(models.TextChoices):
        FOR_XD = "Adobe XD"
        FOR_STETCH = "Sketch"
        FOR_FIGMA = "Figma"
    creator = models.ForeignKey(UserAccount, on_delete=CASCADE)
    title = models.CharField(max_length=300)
    description = models.TextField(blank=True)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=False)
    category = models.CharField(max_length=300)
    toolapp = models.CharField(max_length=50, choices=Toolapp.choices, default=Toolapp.FOR_XD)
    comments = models.ManyToManyField(Comment)
    likes = models.ManyToManyField(Like)
    saves = models.ManyToManyField(Save)
    seens = models.ManyToManyField(Seen)
    photo_1 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_2 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_3 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_4 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    photo_5 = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
    is_popular = models.BooleanField(default=False)
    is_new = models.BooleanField(default=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=now, blank=True)
    tags = models.TextField(blank=True)

    def __str__(self):
        return self.title
