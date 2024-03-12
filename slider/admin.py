from django.contrib import admin
from slider.models import Slider, MediaImage
from django.utils.safestring import mark_safe

# Register your models here.

class ImageInline(admin.TabularInline):
    model=MediaImage
    extra = 3
    readonly_fields = ('get_image',)

    def get_image(self, obj):
        return mark_safe(f'<img src={obj.img.url} width="100" height="110"')


class SliderAdmin(admin.ModelAdmin):
    inlines = [ImageInline]
    save_on_top = True
    
admin.site.register(Slider, SliderAdmin)