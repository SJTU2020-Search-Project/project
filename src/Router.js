import React from 'react';
import {Router, Redirect, Route, Switch} from "react-router";
import {history} from "./utils/history";
import ResultsView from "./view/ResultsView";
import hh from "./main"
import {Button, input} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import './Router.css';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);


class BasicRoute extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            console.log(location, action);
        });
    }

    render() {
        return (
            <div>
                <div className='whole'>
                    <p className='header'>百科搜索</p><br/>
                    <div className='searchAll'>
                        <input className='demo1' size="30" maxLength="400" placeholder='输入你的搜索'/>
                        <Button  className='demo2'  type="primary" icon={<SearchOutlined/>} href='/Router'>
                            Search
                        </Button>
                    </div>
                    <div>
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={hh}/>
                            <Route path="/*" component = {ResultsView}/>
                            <Redirect from="/*" to="/" />
                        </Switch>
                    </Router>
                    </div>
            </div>
            </div>


        );
    }

    // render() {
    //     return (
    //         <div>
    //             <h1>about</h1>
    //             <a href='/Router'>W3School</a>
    //             <Router history={history}>
    //                 <Switch>
    //                     <Route exact path="/" component = {ResultsView}/>
    //                     <Redirect from="/*" to="/" />
    //                 </Switch>
    //             </Router>
    //         </div>
    //
    //
    //     );
    // }
}

export default BasicRoute;