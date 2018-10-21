# coding: utf-8


from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.http import HttpResponseServerError
from django.shortcuts import render
from django.urls import reverse
from django.views import View
from leancloud import Object
from leancloud import Query
from leancloud import File
from leancloud.errors import LeanCloudError
import sys
reload(sys)
sys.setdefaultencoding('utf-8')


class Info(Object):
    pass


def index(request):
    return render(request, 'index.html', {})


def submit(request):
    name = request.POST.get('name')
    if not name:
        return render(request, 'index.html', {})
    phone = request.POST.get('phone')
    college = request.POST.get('college')
    sex = request.POST.get('sex')
    grade = request.POST.get('grade')
    dept = request.POST.get('dept')
    info = Info()
    info.set('name',name)
    info.set('phone',phone)
    info.set('college',college)
    info.set('sex',sex)
    info.set('grade',grade)
    info.set('dept',dept)
    try:
        info.save()
    except LeanCloudError as e:
        return render(request, 'fail.html', {'msg':e.error})
    return render(request, 'success.html', {})
