import React from "react";
import {Input, Modal} from "antd";
import 'antd/dist/antd.css';
import '../css/homeView.css';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const {Search} = Input;
const { confirm } = Modal;

class HomeView extends React.Component {

    search = (value, event) => {
        this.props.history.push("/s?wd="+value);
    };

    signIn = () => {
        if (localStorage.getItem('user')) {
            confirm({
                title: '确定要退出吗?',
                icon: <ExclamationCircleOutlined />,
                content: '点确定退出登录',
                okText: '确定',
                cancelText: '取消',
                onOk() {
                    console.log('OK');
                    localStorage.removeItem('user');
                    localStorage.removeItem('role');
                    window.location.reload();
                },
                onCancel() {
                    console.log('Cancel');
                },
            });
        } else this.props.history.push("./signIn");
    };

    render() {
        return (
            <div className="homeView">
                <div>
                    <div className="signIn-div">
                        <button className="signIn" onClick={this.signIn}>{localStorage.getItem('user')?localStorage.getItem('user'):'Sign In'}</button>
                        <Modal> </Modal>
                    </div>
                </div>
                <div className="logo">
                    <p className="title">Why so Serious</p>
                </div>
                <div className="search-div">
                    <Search size="large" placeholder="input search text" enterButton="Search" onSearch={this.search}/>
                </div>
                <div>

                </div>
            </div>
        );
    }

}

export default HomeView;