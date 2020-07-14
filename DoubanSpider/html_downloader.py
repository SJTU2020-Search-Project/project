import urllib.request


class HtmlDownloader(object):
    def download(self, new_url):
        if new_url is None:
            return None
        # httpproxy_handler = urllib.request.ProxyHandler(
        #     {
        #         "http": "123.169.127.17:9999",
        #     },
        # )
        headers = ("User-Agent","Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36")
        opener = urllib.request.build_opener()
        opener.addheaders=[headers]
        # request = urllib.request.Request(new_url)

        response = opener.open(new_url)
        if response.getcode() != 200:
            return None
        return response.read()
