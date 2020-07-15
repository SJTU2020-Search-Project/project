import React from "react";
import {Layout, Affix, List, Space, Pagination, Input} from 'antd';
import Ret from "../components/Ret";
import Baike from "../components/Baike";
import 'antd/dist/antd.css';
import '../css/resultsView.css';

const {Header, Content, Footer} = Layout;

const {Search} = Input;

const initialData = [{"title":"Java教程|菜鸟教程", "url":"https://www.runoob.com/java/java-tutorial.html"},
                    {"title":"Java教程|菜鸟教程", "url":"https://www.runoob.com/java/java-tutorial.html"}];

const wikiData = {"image":"../assets/test.jpg", "name":"The Shawshank Redemption", "score":"97", "summary":"20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为鲨堡的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗 里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……\n" +
        "本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。", "value":["弗兰克.德拉邦特", "摩根·弗里曼，蒂姆·罗宾斯", "剧情 / 犯罪", "美国", "英语", "1994-09-10(多伦多电影节) / 1994-10-14(美国)", "142分钟"]};

class ResultsView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            wd: window.location.search.substr(4),
            tmp: window.location.search.substr(4),
            page: 1,
            data: initialData,
            total: 2,
            wiki: wikiData
        };
    }

    // componentDidMount() {
    //     const callback = (data) => {
    //         this.setState({
    //             data: data
    //         })
    //     }
    //     this.getData(this.state.wd, this.state.page, callback);
    // };
    //
    // getData = (wd, page, callback) => {
    //     const data = {wd: wd, page: page};
    //     const url = `http://localhost:8080/search`;
    //     postRequest_v2(url, data, callback);
    // };

    onChange = (page) => {
        console.log(page);
        this.setState({
            page: page
        })
    };

    search = (value, event) => {
        this.props.history.push("/s?wd="+value);
        this.setState({
            wd: value,
            page: 1
        });
    };

    setValue = (e) => {
        this.setState({tmp: e.target.value});
    };

    signIn = () => {
        this.props.history.push("./signIn");
    };

    render() {
        return (
            <div className="resultView">
                <Layout>
                    <Affix>
                        <Header>
                            <div className="search-bar">
                                <Search size="large" value={this.state.tmp} enterButton="Search"  onChange={this.setValue} onSearch={this.search}/>
                            </div>
                            <div className="signIn-bar">
                                <button className="signIn" onClick={this.signIn}>Sign In</button>
                            </div>
                        </Header>
                    </Affix>
                    <Content>
                        <div className="numCounter">
                            <p className="count">About {this.state.total} results</p>
                        </div>
                        <Baike info={this.state.wiki} wd={this.state.wd}/>
                        <List
                            itemLayout="vertical"
                            dataSource={this.state.data}
                            renderItem={item => (
                                <List.Item>
                                    <Space direction="vertical">
                                        <Ret info={item} wd={this.state.wd}/>
                                    </Space>
                                </List.Item>
                            )}
                        />
                        <Pagination onChange={this.onChange} total={50} current={this.state.page}/>
                    </Content>
                    <Footer>

                    </Footer>
                </Layout>
            </div>
        );
    }

}

export default ResultsView;