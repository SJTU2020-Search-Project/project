import re
from bs4 import BeautifulSoup
import datetime


class DoubanParser(object):
    def parse(self, html_cont):
        if html_cont is None:
            return
        soup = BeautifulSoup(html_cont, 'html.parser')
        new_data = self._get_new_data(soup)
        return new_data

    def _get_new_data(self, soup):
        res_data = {}

        # 获取电影的标题
        title_node = soup.find('div', id='content').find('h1')
        res_data['title'] = title_node.get_text().strip()
        # 导演、主演等基本信息
        info_node = soup.find('div', id='info')
        res_data['dir'] = info_node.find('a', rel='v:directedBy').get_text()

        actors = ""
        for tag in info_node.find_all('a', rel='v:starring'):
            actors = actors + tag.string + '/'
        actors = actors.strip('/')
        res_data['actors'] = actors

        genre = ""
        for tag in info_node.find_all('span', property='v:genre'):
            genre = genre + tag.string + '/'
        genre = genre.strip('/')
        res_data['genre'] = genre

        nation = re.findall('<span class="pl">制片国家/地区:</span> (.*?)<br/>', str(info_node))
        res_data['nation'] = nation

        language = re.findall('<span class="pl">语言:</span> (.*?)<br/>', str(info_node))
        res_data['language'] = language

        date=""
        for tag in info_node.find_all('span', property='v:initialReleaseDate'):
            date = date + tag.string + '/'
        date = date.strip('/')
        res_data['date'] = date

        try:
            res_data['runtime'] = info_node.find('span', property='v:runtime').get_text()
        except:
            res_data['runtime'] = "NULL"
        try:
            rating = soup.find('strong', class_='ll rating_num').get_text()
            if rating == '':
                res_data['rating'] = -1
            else:
                res_data['rating'] = rating
        except:
            res_data['rating'] = -1
        try:
            res_data['summary'] = soup.find('span', property='v:summary').get_text().strip()
        except:
            res_data['summary'] = "NULL"
        try:
            res_data['votes'] = soup.find('span', property='v:votes').get_text()
        except:
            res_data['votes'] = 0
        return res_data
