# Generated by Django 4.1.3 on 2023-05-01 12:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cert_gen_sen_app_backend', '0012_alter_event_certificates_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='certificates_file',
            field=models.FileField(default='', upload_to='pdf-certificates-files'),
        ),
    ]