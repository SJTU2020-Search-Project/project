
import re
from bs4 import BeautifulSoup


class DoubanParser(object):
    def parse(self, html_cont):
        if html_cont is None:
            return
        soup = BeautifulSoup(html_cont, 'html.parser')
        new_data = self._get_new_data(soup)
        return new_data

    def _get_new_data(self,  soup):
        res_data = {}


        # 获取电影的标题
        title_node = soup.find('div', id='content').find('h1')
        res_data['title'] = title_node.get_text().strip()
        # 导演、主演等基本信息
        info_node = soup.find('div', id='info')
        res_data['dir'] = info_node.find('a', rel='v:directedBy').get_text()
        actors = []
        for tag in info_node.find_all('a', rel='v:starring'):
            actors.append(tag.string)

        res_data['actors'] = actors

        genre = []
        for tag in info_node.find_all('a', rel='v:genre'):
            genre.append(tag.string)

        res_data['genre'] = genre

        nation = re.findall('<span class="pl">制片国家/地区:</span> (.*?)<br/>', str(info_node))
        res_data['nation'] = nation
        language = re.findall('<span class="pl">语言:</span> (.*?)<br/>', str(info_node))
        res_data['language'] = language

        date = []
        for tag in info_node.find_all('span', property='v:initialReleaseDate'):
            date.append(tag.string)

        res_data['date'] = date

        res_data['runtime'] = info_node.find('span', property='v:runtime').get_text()

        res_data['rating'] = soup.find('strong', class_='ll rating_num').get_text()

        res_data['summary'] = soup.find('span', class_='all hidden').get_text()
        return res_data
