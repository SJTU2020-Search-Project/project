import React from 'react';
import {shallow, render, mount} from "enzyme";
import RegisterView from "../view/RegisterView";
import {Button, Input} from "antd";

describe('RegisterView', () => {

    const wrapper = shallow(<RegisterView />);

    it('Input Search', () => {
        const input = <Input.Search size="large" placeholder="input search text" enterButton="Search"/>;
        expect(wrapper.containsAllMatchingElements([input])).toEqual(true);
    });

    it('Input Username', () => {
        const input = <Input placeholder="Please input your username"/>;
        expect(wrapper.containsAllMatchingElements([input])).toEqual(true);
    });

    it('Input Password', () => {
        const input = <Input.Password placeholder="Please input your password"/>;
        expect(wrapper.containsAllMatchingElements([input])).toEqual(true);
    });

    it('h1', () => {
        const h1 = <h1>Register</h1>;
        expect(wrapper.contains(h1)).toEqual(true);
    });

    it('p1', () => {
        const p = <p>Username: </p>;
        expect(wrapper.contains(p)).toEqual(true);
    });

    it('p2', () => {
        const p = <p>Password: </p>;
        expect(wrapper.contains(p)).toEqual(true);
    });

    it('p3', () => {
        const p = <p>Repeat Password: </p>;
        expect(wrapper.contains(p)).toEqual(true);
    });

    it('Button', () => {
        const btn = <Button>Register</Button>;
        expect(wrapper.containsAllMatchingElements([btn])).toEqual(true);
    });

    it('set value', () => {
        expect(wrapper.find('.input_username').prop('value')).toEqual(undefined);
    });
});