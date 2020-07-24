import React from "react";
import {Layout, Affix} from "antd";
import 'antd/dist/antd.css';
import '../css/wikiView.css';
import {postRequest_v3} from "../utils/ajax";

const {Header, Content} = Layout;

const wikiData = {"image":"../assets/test.jpg", "name":"The Shawshank Redemption", "score":"97", "summary":"20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为鲨堡的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生。未过多久，安迪尝试接近囚犯中颇有声望的瑞德（摩根·弗 里曼 Morgan Freeman 饰），请求对方帮自己搞来小锤子。以此为契机，二人逐渐熟稔，安迪也仿佛在鱼龙混杂、罪恶横生、黑白混淆的牢狱中找到属于自己的求生之道。他利用自身的专业知识，帮助监狱管理层逃税、洗黑钱，同时凭借与瑞德的交往在犯人中间也渐渐受到礼遇。表面看来，他已如瑞德那样对那堵高墙从憎恨转变为处之泰然，但是对自由的渴望仍促使他朝着心中的希望和目标前进。而关于其罪行的真相，似乎更使这一切朝前推进了一步……\n" +
        "本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。", "value":["弗兰克.德拉邦特", "摩根·弗里曼，蒂姆·罗宾斯", "剧情 / 犯罪", "美国", "英语", "1994-09-10(多伦多电影节) / 1994-10-14(美国)", "142分钟"]};


class WikiView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: {"":""}
        }
    }

    componentDidMount() {
        const callback = (data) => {
            this.setState({
                data: data
            })
        };
        this.getData(callback);
    };

    getData = (callback) => {
        const tmp = window.location.pathname;
        const id = tmp.substr(tmp.lastIndexOf('/')+1);
        const url = `http://localhost:8080/findMovie/`+id;
        postRequest_v3(url, callback);
    };

    signIn = () => {
        this.props.history.push("./signIn");
    };

    score = (rating) => {
        if (rating < 0) return "暂无";
        else return rating;
    };

    render() {

        const info = this.state.data;

        return (
            <div className="wikiView">
                <Layout>
                    <Affix>
                        <Header>
                            <div className="signIn-bar">
                                <button className="signIn" onClick={this.signIn}>Sign In</button>
                            </div>
                        </Header>
                    </Affix>
                    <Content>
                        <div className="content">
                            <div className="main-content">
                                <div className="wiki-title">
                                    <p className="wiki-name">{info.title}</p>
                                    <p className="wiki-score">豆瓣评分: {this.score(info.rating)}</p>
                                </div>
                                <div className="wiki-summary">
                                    <p className="wiki-para">{info.summary}</p>
                                </div>
                                <div className="basicInfo">
                                    <dl className="basic-info-left">
                                        <dt className="basicInfo-name">导演</dt>
                                        <dd className="basicInfo-value">{info.dir}</dd>
                                        <dt className="basicInfo-name">类型</dt>
                                        <dd className="basicInfo-value">{info.genre}</dd>
                                        <dt className="basicInfo-name">语言</dt>
                                        <dd className="basicInfo-value">{info.language}</dd>
                                        <dt className="basicInfo-name">片长</dt>
                                        <dd className="basicInfo-value">{info.runtime}</dd>
                                    </dl>
                                    <dl className="basic-info-right">
                                        <dt className="basicInfo-name">主演</dt>
                                        <dd className="basicInfo-value">{info.actors}</dd>
                                        <dt className="basicInfo-name">国家/地区</dt>
                                        <dd className="basicInfo-value">{info.nation}</dd>
                                        <dt className="basicInfo-name">上映日期</dt>
                                        <dd className="basicInfo-value">{info.date}</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default WikiView;