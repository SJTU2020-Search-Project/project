import pymysql

class HtmlOutputer(object):
    def __init__(self):
        self.datas = []
    def collect_data(self, new_data):
        if new_data is None:
            return
        print(new_data['summary'])
        self.datas.append(new_data)
#数据库操作函数
    def into_mysql(self):
        i = 0
        for data in self.datas:
            conn = pymysql.Connect(
                host='127.0.0.1',   #服务器地址
                user='root',        #用户名
                password='123456',  #密码
                db='baike',         #数据库名称
                port=3308,          #端口
                charset='utf8'   #字符集
            )
            try:
                cursor = conn.cursor()
                i += 1
                sql = 'insert into `baidubaikeurl`(`id`,`Title`,`URL`,`Summary`)values(%s,%s,%s,%s)'
#执行上面的sql语句 并传入4个参数
#分别是id，title，url，summary
                cursor.execute(sql, (i, data['title'],data['URL'],data['summary']))
                conn.commit()
            finally:
                conn.close()