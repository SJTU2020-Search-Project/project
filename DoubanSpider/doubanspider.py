from DoubanSpider import html_downloader
from DoubanSpider import douban_parser
from DoubanSpider import douban_outputer
import time


class doubanSpider(object):
    def __init__(self):
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = douban_parser.DoubanParser()
        self.outputer = douban_outputer.DoubanOutputer()

    def craw(self, root_url):
        try:

            html_cont = self.downloader.download(root_url)
            data = self.parser.parse(html_cont)
            self.outputer.collect_data(data)
            print('crawled')
            print(data)
        except:
            print("invalid url")


if __name__ == '__main__':
    start = 1300080
    size = 20
    i = 0
    obj_spider = doubanSpider()
    print("crawling")
    while i < size:
            url = 'https://movie.douban.com/subject/' + str(start + i) + '/'
            obj_spider.craw(url)
            time.sleep(2)
            i += 1

    obj_spider.outputer.into_mysql()

