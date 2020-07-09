from BetaSpider import html_downloader
from BetaSpider import html_parser
from BetaSpider import html_outputer

class MiniSpider(object):
    def __init__(self):
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = html_parser.HtmlParser()
        self.outputer = html_outputer.HtmlOutputer()

    def craw(self, root_url):
        try:
            print('crawling...')
            html_cont = self.downloader.download(root_url)
            data = self.parser.parse(html_cont, root_url)
            self.outputer.collect_data(data)
            print('crawled')
        except:
            print('skipping...')



if __name__ == '__main__':
    i = 1
    size = 100              #爬取规模
    obj_spider = MiniSpider()
    while i < size:
        rooturl = 'https://baike.baidu.com/view/'+str(i)+'.htm'
        obj_spider.craw(rooturl)
        i += 1

    obj_spider.outputer.into_mysql()
    print('visiting count: %d' % i)
