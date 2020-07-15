import React from "react";
import {Input} from "antd";
import 'antd/dist/antd.css';
import '../css/homeView.css'

const {Search} = Input;

class HomeView extends React.Component {

    search = (value, event) => {
        this.props.history.push("/s?wd="+value);
    };

    signIn = () => {
        this.props.history.replace("./signIn");
    };

    render() {
        return (
            <div className="homeView">
                <div>
                    <div className="signIn-div">
                        <button className="signIn" onClick={this.signIn}>Sign In</button>
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