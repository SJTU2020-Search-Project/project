
import re
from urllib import parse
from bs4 import BeautifulSoup


class HtmlParser(object):
    def parse(self, html_cont):
        if  html_cont is None:
            return
        soup = BeautifulSoup(html_cont, 'html.parser')
        new_data = self._get_new_data (soup)
        return new_data

    def _get_new_data(self,  soup):
        res_data = {}


        # 获取词条的标题
        title_node = soup.find('dd', class_='lemmaWgt-lemmaTitle-title').find('h1')
        res_data['title'] = title_node.get_text()
        # 获取词条的内容
        summary_node = soup.find('div', class_='lemma-summary')
        res_data['summary'] = summary_node.get_text()
        return res_data
