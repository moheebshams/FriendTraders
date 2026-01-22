from rest_framework import serializers
from .models import Blog, Gallery


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'author', 'content', 'image', 'created_at', 'updated_at', 'is_published']
        read_only_fields = ['id', 'created_at', 'updated_at']


class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = ['id', 'image', 'image_type', 'is_active']
        read_only_fields = ['id']
