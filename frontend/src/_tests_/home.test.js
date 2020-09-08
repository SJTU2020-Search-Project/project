import React from "react";
import {shallow} from "enzyme";
import HomeView from "../view/HomeView";
import {Modal, Input} from "antd";

const {Search} = Input;

describe('HomeView', () => {

    const wrapper = shallow(<HomeView/>);

    it('btn_signIn', () => {
        const btn = <button className="signIn">{localStorage.getItem('user')?localStorage.getItem('user'):'Sign In'}</button>;
        expect(wrapper.containsAllMatchingElements([btn])).toEqual(true);
    });

    it('modal', () => {
        const modal = <Modal> </Modal>;
        expect(wrapper.contains(modal)).toEqual(true);
    });

    it('p', () => {
        const p = <p className="title">Why so Serious</p>;
        expect(wrapper.contains(p)).toEqual(true);
    });

    it('Input Search', () => {
        const input = <Search size="large" placeholder="input search text" enterButton="Search"/>
        expect(wrapper.containsAllMatchingElements([input])).toEqual(true);
    });

});
