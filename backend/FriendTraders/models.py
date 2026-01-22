from django.db import models

class Blog(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    content = models.TextField()
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_published = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Gallery(models.Model):
    IMAGE_TYPE_CHOICES = [
        ('slider', 'Slider Only'),
        ('gallery', 'Gallery Only'),
        ('both', 'Both Slider & Gallery'),
    ]

    image = models.ImageField(upload_to='gallery_images/')
    image_type = models.CharField(
        max_length=10,
        choices=IMAGE_TYPE_CHOICES,
        default='both'
    )
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return f"Gallery Image - {self.get_image_type_display()}"
