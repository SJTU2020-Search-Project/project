#-*- coding:utf-8 -*-
import re
import urllib.request,urllib.error,urllib.parse
from bs4 import BeautifulSoup

def getdata(baseurl):
    headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
    }
    req = urllib.request.Request(baseurl,headers=headers)
    response = urllib.request.urlopen(req)
    html = response.read()
    #print(html)
    bs = BeautifulSoup(html,"lxml")
    #print(type(bs))
    #print(bs)
    #link = bs.h3.a.attrs['href']
    tmp=bs.find_all('h3')
    #print(tmp)
    link=[]
    title=[]
    for item in tmp:
        #print(item)

        title.append(str(item.find(target='_blank').text))
        print('title:')
        print(item.find(target='_blank').text)


        link.append(str(item.find('a').get('href')))
        print("link:")
        print(item.find('a').get('href'))

        print('content:')
        print(item.find_next_sibling().text)
        print()
    #print(link)
    #print(type(link))

if __name__ == '__main__':
    s = input('要搜索内容:')
    s = urllib.parse.quote(s)
    for i in range (0,1):
        baseurl = "https://www.baidu.com/s?wd=%s&ch=8&pn=%d&oq=%s&tn=78040160_5_pg"%(s,i*10,s)
        #print(baseurl)
        getdata(baseurl)
    
