import React from "react";
import {Input} from "antd";
import 'antd/dist/antd.css';
import '../css/homeView.css'

const {Search} = Input;

class HomeView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            wd: null
        }
    }

    setWd = (e) => {
        this.setState({wd: e.target.value});
    };

    search = () => {
        this.props.history.push("/s?wd="+this.state.wd);
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
                    <Search placeholder="input search text" enterButton="Search" onChange={this.setWd} onSearch={this.search}/>
                </div>
                <div>

                </div>
            </div>
        );
    }

}

export default HomeView;