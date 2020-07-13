import React from "react";
import {Layout, Affix, List, Space, Pagination} from 'antd';
import Ret from "../components/Ret";
import 'antd/dist/antd.css'
import '../css/resultsView.css';
import {postRequest_v2} from "../utils/ajax";

const {Header, Content, Footer} = Layout;

const initialData = [{"title":"Java教程|菜鸟教程", "url":"https://www.runoob.com/java/java-tutorial.html"},
                    {"title":"Java教程|菜鸟教程", "url":"https://www.runoob.com/java/java-tutorial.html"}];

class ResultsView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            //wd: window.location.search.substr(4),
            wd: "java",
            page: 1,
            data: initialData,
            total: 2
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

    render() {
        return (
            <Layout>
                <br/>
                <br/>
                <Affix>
                    <Header>

                    </Header>
                </Affix>
                <Content>
                    <div className="numCounter">
                        <p className="count">About {this.state.total} results</p>
                    </div>
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
                    <Pagination onChange={this.onChange} total={50}/>
                </Content>
                <Footer>

                </Footer>
            </Layout>
        );
    }
}

export default ResultsView;