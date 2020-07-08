import html_downloader
import html_parser


class MiniSpider(object):
    def __init__(self):
        self.downloader = html_downloader.HtmlDownloader()
        self.parser = html_parser.HtmlParser()

    def craw(self, root_url):
        try:
            print('crawling...')
            html_cont = self.downloader.download(root_url)
            data = self.parser.parse(html_cont)
            print(data)
        except:
            print('craw failed')


if __name__ == '__main__':
    count = 1
    while count < 10:
        rooturl = 'https://baike.baidu.com/view/'+str(count)+'.htm'
        obj_spider = MiniSpider()
        obj_spider.craw(rooturl)
        count += 1
