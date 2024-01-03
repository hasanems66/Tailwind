from django.db import models
from django.utils import timezone
from django.utils.html import format_html
from django_jalali.db import models as jmodels
from account.models import User
from django.utils.text import slugify
from django.urls import reverse
from hitcount.models import HitCount, HitCountMixin
from django.contrib.contenttypes.fields import GenericRelation



class Category(models.Model):
    title = models.CharField(max_length=50, verbose_name= 'عنوان')
    slug = models.SlugField(blank=True, null=True,unique=True, allow_unicode=True)
    created_at = jmodels.jDateTimeField(auto_now_add=True, verbose_name= 'تاریخ ایجاد')

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'دسته بندی'
        verbose_name_plural = 'دسته بندی ها'



class Article(models.Model):
    title = models.CharField(max_length=100, verbose_name= 'عنوان')
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='articles', verbose_name='نویسنده')
    category = models.ManyToManyField(Category, related_name='articles', verbose_name='دسته بندی')
    image = models.ImageField(upload_to='images/course', verbose_name='تصویر مقاله')
    body = models.TextField(verbose_name='توضیحات')
    slug = models.SlugField(blank=True, unique=True, allow_unicode=True, verbose_name='اسلاگ')
    views = GenericRelation(HitCount, object_id_field='object_pk',
                            related_query_name='hit_count_generic_relation',verbose_name='تعداد بازدید')
    status = models.BooleanField(default=True, verbose_name='وضعیت')
    updated = models.DateTimeField(auto_now=True, verbose_name='آپدیت')
    created_at = jmodels.jDateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    pub_date = jmodels.jDateField(default=timezone.now, verbose_name='تاریخ انتشار')



    class Meta:
        ordering = ('-created_at', )
        verbose_name = 'مقاله'
        verbose_name_plural = 'مقالات'


    def save(
        self, force_insert=False, force_update=False, using=None, update_fields=None):
        self.slug = slugify(self.title,allow_unicode=True)
        super(Article, self).save()

    # def get_absolute_url(self):
    #     return reverse('blog:article_detail', args=[self.slug])

    def show_image(self):
        if self.image:
            return format_html(f'<img src="{self.image.url}" width="40px" height="30px"  alt="">')
        return format_html('<h4 style="color: red">تصویر ندارد</h4>')
    show_image.short_description = 'نمایش تصویر'


    def __str__(self):
        return f'{self.title}-{self.author.fullname}'



