from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Blog, Gallery
from .serializers import BlogSerializer, GallerySerializer


class BlogViewSet(viewsets.ModelViewSet):
    queryset = Blog.objects.filter(is_published=True).order_by('-created_at')
    serializer_class = BlogSerializer


class GalleryViewSet(viewsets.ModelViewSet):
    queryset = Gallery.objects.filter(is_active=True).order_by('-id')
    serializer_class = GallerySerializer


@api_view(['GET'])
def blog_list(request):
    blogs = Blog.objects.filter(is_published=True).order_by('-created_at')
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def blog_detail(request, pk):
    try:
        blog = Blog.objects.get(id=pk, is_published=True)
        serializer = BlogSerializer(blog)
        return Response(serializer.data)
    except Blog.DoesNotExist:
        return Response({'error': 'Blog not found'}, status=404)


@api_view(['GET'])
def gallery_list(request):
    gallery_items = Gallery.objects.filter(is_active=True).order_by('-id')
    serializer = GallerySerializer(gallery_items, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def gallery_detail(request, pk):
    try:
        gallery_item = Gallery.objects.get(id=pk, is_active=True)
        serializer = GallerySerializer(gallery_item)
        return Response(serializer.data)
    except Gallery.DoesNotExist:
        return Response({'error': 'Gallery item not found'}, status=404)


def home(request):
    my_response = {
        "blogs": [
            {
                "title": "blog title",
                "description": "description"
                
            },
            {
                "title": "blog title2",
                "description": "description"
            },
            {
                "title": "blog title3",
                "description": "description"
            },
            {
                "title": "blog title4",
                "description": "description"
            }
        ]
    }
    return JsonResponse(my_response)
