import React from "react";
import {shallow} from "enzyme";
import SignIn from "../view/SignInView";
import {Input, Button} from "antd";

describe('', () => {

    const wrapper = shallow(<SignIn/>);

    it ('', () => {
        const input = <Input.Search size="large" placeholder="input search text" enterButton="Search"/>
        expect(wrapper.containsAllMatchingElements([input])).toEqual(true);
    });

    it ('', () => {
        const h1 = <h1>Welcome!</h1>;
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it ('', () => {
        const div_username =
            <div className="username">
                <p>Username: </p>
                <Input placeholder="Please input your username"/>
            </div>;
        expect(wrapper.containsAllMatchingElements([div_username])).toEqual(true);
    });

    it ('', () => {
        const div_password =
            <div className="password">
                <p>Password: </p>
                <Input.Password placeholder="Please input your password"/>
            </div>;
        expect(wrapper.containsAllMatchingElements([div_password])).toEqual(true);
    });

    it ('', () => {
        const btn = <Button>Sign In</Button>;
        expect(wrapper.containsAllMatchingElements([btn])).toEqual(true);
    });

    it ('', () => {
        const btn = <Button>Register</Button>;
        expect(wrapper.containsAllMatchingElements([btn])).toEqual(true);
    });

});