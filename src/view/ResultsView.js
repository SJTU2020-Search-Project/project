import React from "react";
import {Layout, Affix, List, Space, Pagination, Input} from 'antd';
import Ret from "../components/Ret";
import Baike from "../components/Baike";
import {postRequest_v2} from "../utils/ajax";
import 'antd/dist/antd.css';
import '../css/resultsView.css';

const {Header, Content, Footer} = Layout;

const {Search} = Input;

const initialData = [{"title":"Java教程|菜鸟教程", "url":"https://www.runoob.com/java/java-tutorial.html"},
                    {"title":"Java教程|菜鸟教程", "url":"https://www.runoob.com/java/java-tutorial.html"}];

class ResultsView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            wd: window.location.search.substr(4),
            tmp: window.location.search.substr(4),
            page: 1,
            data: initialData,
            total: 2,
            wiki: [{"":""}]
        };
    }

    componentDidMount() {
        const callback = (data) => {
            this.setState({
                wiki: data
            })
        };
        this.getData(this.state.wd, this.state.page, callback);
    };

    getData = (wd, page, callback) => {
        const data = {title: wd, page: page};
        const url = `http://localhost:8080/search`;
        postRequest_v2(url, data, callback);
    };

    onChange = (page) => {
        console.log(page);
        this.setState({
            page: page
        })
    };

    search = (value, event) => {
        if (value === this.state.wd) return;
        this.props.history.push("/s?wd="+value);
        const callback = (data) => {
            this.setState({
                wd: value,
                page: 1,
                wiki: data
            });
        };
        this.getData(value, 1, callback);
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
                        <List
                            itemLayout="vertical"
                            dataSource={this.state.wiki}
                            renderItem={item => (
                                <List.Item>
                                    <Space direction="vertical">
                                        <Baike info={item} wd={this.state.wd}/>
                                    </Space>
                                </List.Item>
                            )}
                        />
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