from django.shortcuts import render, HttpResponse

# Create your views here.

def home(request):
    return render(request,'AnimaBlend/home.html')

def index(request):
    return render(request, 'AnimaBlend/index.html')