import urllib.request


class HtmlDownloader(object):
    def download(self, new_url):
        if new_url is None:
            return None
        headers = ("User-Agent","Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE")
        opener = urllib.request.build_opener()
        opener.addheaders=[headers]
        response = opener.open(new_url)
        if response.getcode() != 200:
            return None
        return response.read()
