import React from 'react';
import {Router, Redirect, Route, Switch} from "react-router";
import {history} from "./utils/history";
import ResultsView from "./view/ResultsView";
import HomeView from "./view/HomeView";
import SignIn from "./view/SignInView";
import WikiView from "./view/WikiView";
import RegisterView from "./view/RegisterView";

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
                    <Route exact path="/signIn" component={SignIn}/>
                    <Route exact path="/wiki/*" component={WikiView}/>
                    <Route exact path="/register" component={RegisterView}/>
                    <Redirect from="/*" to="/" />
                </Switch>
            </Router>
        );
    }
}

export default BasicRoute;