#-*- coding:utf-8 -*-
import re
import urllib.request,urllib.error,urllib.parse
from bs4 import BeautifulSoup

def getdata(baseurl):
    req = urllib.request.Request(baseurl)
    response = urllib.request.urlopen(req)
    html = response.read()
    bs = BeautifulSoup(html,"html.parser")
    #print(bs.p)
    title = bs.h1.string
    print(title)
    content = bs.find_all('p')
    for item in content:
        item = str(item)
        item = re.sub('<.*?>','',item)
        item = re.sub(r'\[\d*\]','',item)
        print(item)

if __name__ == '__main__':
    s = input('要查询内容:')
    s = urllib.parse.quote(s)
    baseurl = "https://zh.wikipedia.org/wiki/%s"%(s)
    #print(baseurl)
    getdata(baseurl)
    
