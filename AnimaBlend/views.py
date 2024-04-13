from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def home2(request):
    return render(request, 'AnimaBlend/home2.html')