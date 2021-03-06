import React from "react";
import {Input, Button, Layout} from "antd";
import 'antd/dist/antd.css';
import '../css/signInView.css';

const {Header, Content} = Layout;

class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    setUsername = (e) => {this.setState({username: e.target.value})};

    setPassword = (e) => {this.setState({password: e.target.value})};

    register = (e) => {
        this.props.history.replace("./register");
    };

    search = (value, event) => {
        this.props.history.push("/s?wd="+value);
    };

    render() {
        return (
            <div className="signIn">
                <Layout>
                    <Header>
                        <Input.Search size="large" placeholder="input search text" enterButton="Search" onSearch={this.search}/>
                    </Header>
                    <Content>
                        <div className="signIn-content">
                            <h1>Welcome!</h1>
                            <div className="username">
                                <p>Username: </p>
                                <Input onBlur={this.setUsername} placeholder="Please input your username"/>
                            </div>
                            <div className="password">
                                <p>Password: </p>
                                <Input.Password onBlur={this.setPassword} placeholder="Please input your password"/>
                            </div>
                            <div className="signIn-btn">
                                <Button onClick={this.checkMsg}>Sign In</Button>
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

export default SignIn;