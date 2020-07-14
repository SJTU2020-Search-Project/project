import pymysql


class DoubanOutputer(object):
    def __init__(self):
        self.datas = []

    def collect_data(self, new_data):
        if new_data is None:
            return

        self.datas.append(new_data)

    # 数据库操作函数
    def into_mysql(self):
        i = 79
        for data in self.datas:
            conn = pymysql.Connect(
                host='127.0.0.1',  # 服务器地址
                user='root',  # 用户名
                password='123456',  # 密码
                db='douban',  # 数据库名称
                port=3308,  # 端口
                charset='utf8'  # 字符集
            )
            try:
                cursor = conn.cursor()
                i += 1
                sql = 'replace into `movie`(`movie_id`, `title`, `dir`, `actors`, `genre`, `nation`, `language`, `date`,\
                      `runtime`, `rating`, `summary`, `votes`)values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)'
                # 执行上面的sql语句 并传入参数

                cursor.execute(sql, (i, data['title'], data['dir'], data['actors'], data['genre'], data['nation'],
                                     data['language'], data['date'], data['runtime'], data['rating'], data['summary'], data['votes']))
                conn.commit()
            except:
                continue
            finally:
                conn.close()
