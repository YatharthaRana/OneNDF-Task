# Generated by Django 4.2.7 on 2023-12-31 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('phn', models.CharField(max_length=10, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('pan', models.CharField(max_length=20, unique=True)),
                ('loantype', models.CharField(max_length=100)),
                ('loanamount', models.FloatField()),
            ],
        ),
    ]
