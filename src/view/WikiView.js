import React from "react";
import {Layout, Affix} from "antd";
import 'antd/dist/antd.css';
import '../css/wikiView.css';
import {postRequest_v3} from "../utils/ajax";

const {Header, Content} = Layout;

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