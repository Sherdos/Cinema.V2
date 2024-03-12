from django.db import models

class Slider(models.Model):
    """Model definition for Slider."""
    title = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True)
    publish_date = models.DateField(auto_now_add=True)

    class Meta:
        """Meta definition for Slider."""
        verbose_name = 'Сладер'
        verbose_name_plural = 'Сладеры'

    def __str__(self):
        return f'{self.title}'

    @property
    def images(self):
        return self.media_slider.all()


class MediaImage(models.Model):
    """Model definition for MediaImage."""
    img = models.ImageField(upload_to='img/')
    slider = models.ForeignKey(Slider, on_delete=models.CASCADE, related_name='media_slider')

    class Meta:
        """Meta definition for MediaImage."""
        verbose_name = 'Фото'
        verbose_name_plural = 'Фотографии'

    def __str__(self):
        return f"Image for {self.slider.title}"