import React from "react";
import {Input, Button, Layout} from "antd";
import 'antd/dist/antd.css';
import '../css/registerView.css';
import {postRequest} from "../utils/ajax";

const {Header, Content} = Layout;

class RegisterView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            repeat: null
        }
    }

    setUsername = (e) => {this.setState({username: e.target.value})};

    setPassword = (e) => {this.setState({password: e.target.value})};

    setRepeat = (e) => {this.setState({repeat: e.target.value})};

    search = (value, event) => {
        this.props.history.push("/s?wd="+value);
    };

    back = () => {
        this.props.history.replace("/signIn");
    };

    saveUser = (userid, password, callback) => {
        const data = {name: userid, password: password, role: 'ROLE_USER'};
        const url = `http://localhost:8080/signup`;
        postRequest(url, data, callback);
    };

    register = () => {
        if (!this.state.username) {
            alert("用户名不能为空");
            return;
        }
        if (!this.state.password) {
            alert("密码不能为空");
            return;
        }
        if (this.state.username.length > 20) {
            alert("用户名长度不得超过20");
            return;
        }
        if (this.state.password.length > 20) {
            alert("密码长度不得超过20");
            return;
        }
        if (this.state.password !== this.state.repeat) {
            alert("两次输入密码不一致");
            return;
        }
        const callback = (data) => {
            if (JSON.stringify(data).length > 100) {
                alert("用户名已存在");
            } else {
                localStorage.setItem('user', this.state.username);
                localStorage.setItem('role', 'ROLE_USER');
                this.props.history.replace("/");
            }
        };
        this.saveUser(this.state.username, this.state.password, callback);
    };

    render() {
        return (
            <div className="register">
                <Layout>
                    <Header>
                        <Input.Search size="large" placeholder="input search text" enterButton="Search" onSearch={this.search}/>
                    </Header>
                    <Content>
                        <div className="register-content">
                            <div className="back">
                                <p onClick={this.back}>Back</p>
                            </div>
                            <h1>Register</h1>
                            <div className="username">
                                <p>Username: </p>
                                <Input className="input_username" onBlur={this.setUsername} placeholder="Please input your username"/>
                            </div>
                            <div className="password">
                                <p>Password: </p>
                                <Input.Password onBlur={this.setPassword} placeholder="Please input your password"/>
                            </div>
                            <div className="repeat">
                                <p>Repeat Password: </p>
                                <Input.Password onBlur={this.setRepeat} placeholder="Please input your password"/>
                            </div>
                            <div className="register-btn">
                                <Button onClick={this.register}>Register</Button>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }

}

export default RegisterView;