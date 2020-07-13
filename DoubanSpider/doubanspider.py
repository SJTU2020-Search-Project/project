from DoubanSpider import html_downloader
from DoubanSpider import douban_parser
import requests


class doubanSpider(object):
    def __init__(self):
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = douban_parser.DoubanParser()

    def craw(self, root_url):
        try:

            print('crawling...')
            html_cont = self.downloader.download(root_url)
            data = self.parser.parse(html_cont)
            # self.outputer.collect_data(data)
            print('crawled')
            print(data)
        except:
            print('skipping...')



if __name__ == '__main__':
    # i = 1
    # size = 100              #爬取规模
    obj_spider = doubanSpider()
    # while i < size:
    rooturl = 'https://movie.douban.com/subject/1292052/'
    obj_spider.craw(rooturl)
    # i += 1

    # obj_spider.outputer.into_mysql()
    # print('visiting count: %d' % i)
