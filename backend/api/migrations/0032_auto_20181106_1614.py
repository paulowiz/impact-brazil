# Generated by Django 2.1.1 on 2018-11-06 18:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_auto_20181106_1613'),
    ]

    operations = [
        migrations.RenameField(
            model_name='lc',
            old_name='city_obj',
            new_name='city',
        ),
    ]