from django.contrib import admin
from .models import Shot

class ShotAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'thumbnail')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    list_per_page = 25

admin.site.register(Shot, ShotAdmin)

