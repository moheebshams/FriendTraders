from django.contrib import admin
from .models import Blog, Gallery

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_at', 'is_published')
    list_filter = ('is_published', 'created_at')
    search_fields = ('title', 'author', 'content')
    readonly_fields = ('created_at', 'updated_at')


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    list_display = ('id', 'image_type', 'is_active')
    list_filter = ('image_type', 'is_active')
    fieldsets = (
        ('Image', {
            'fields': ('image',)
        }),
        ('Type', {
            'fields': ('image_type',)
        }),
        ('Status', {
            'fields': ('is_active',)
        }),
    )
