# Generated by Django 4.0.3 on 2022-04-07 16:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('families', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Materials',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('designation', models.CharField(max_length=30)),
                ('family', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='families.family')),
            ],
        ),
    ]
