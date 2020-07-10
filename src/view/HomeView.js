import React from "react";
import {Input} from "antd";
import 'antd/dist/antd.css';
import '../css/homeView.css'

const {Search} = Input;

class HomeView extends React.Component {

    search = (value, event) => {
        this.props.history.push("/s?wd="+value);
    };

    render() {
        return (
            <div className="layout">
                <div>

                </div>
                <div className="logo">
                    <p className="title">Why so Serious</p>
                </div>
                <div className="search-div">
                    <Search size="large"  placeholder="input search text" enterButton="Search" onSearch={this.search}/>
                </div>
                <div>

                </div>
            </div>
        );
    }

}

export default HomeView;