import React from "react";
import {shallow} from "enzyme";
import WikiView from "../view/WikiView";

describe('', () => {

    const wrapper = shallow(<WikiView/>);

    it ('', () => {
        const btn = <button className="signIn">Sign In</button>;
        expect(wrapper.containsAllMatchingElements([btn])).toEqual(true);
    });

    it ('', () => {
        const p = <p></p>;
        expect(wrapper.containsAllMatchingElements([p])).toEqual(true);
    });

    it ('', () => {
        const dd = <dd></dd>;
        expect(wrapper.containsAllMatchingElements([dd])).toEqual(true);
    })

});