#-*- coding:utf-8 -*-
import re
import urllib.request,urllib.error,urllib.parse
import pymysql
import sys
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
    for item in tmp:
        #print(item)

        #print('title:')
        title=item.find(target='_blank').text
        print(title)

        #print("link:")
        link=item.find('a').get('href')
        print(link)
        #print()
        #sql = u"INSERT INTO test(title,link) VALUES(%s,%s)"
        #conn.execute(sql,[title,link])


if __name__ == '__main__':

    #db = pymysql.connect(host='127.0.0.1',user='root',password='0000',db='external',port=3306,charset='utf8')
    #conn = db.cursor()
    #conn.execute("DROP TABLE IF EXISTS test")
    #conn.execute("CREATE TABLE test(title text not NULL,link text NOT NULL)")
    #conn.execute("ALTER TABLE test CONVERT TO CHARACTER SET gbk COLLATE gbk_chinese_ci") #解决中文问题
    #s = input('要搜索内容:')
    s = str(sys.argv[1])
    s = urllib.parse.quote(s)

    for i in range (0,10):
        baseurl = "https://www.baidu.com/s?wd=%s&ch=8&pn=%d&oq=%s&tn=78040160_5_pg"%(s,i*10,s)
        getdata(baseurl)
    #db.commit()
    #conn.close()
    #db.close()
