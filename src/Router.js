import React from 'react';
import {Router, Redirect, Route, Switch} from "react-router";
import {history} from "./utils/history";
import ResultsView from "./view/ResultsView";
import HomeView from "./view/HomeView";

class BasicRoute extends React.Component {

    constructor(props) {
        super(props);

        history.listen((location, action) => {
            console.log(location, action);
        });
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component = {HomeView}/>
                    <Route exact path="/s" component = {ResultsView}/>
                    <Redirect from="/*" to="/" />
                </Switch>
            </Router>
        );
    }
}

export default BasicRoute;