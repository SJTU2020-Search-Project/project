import React from "react";
import {shallow} from 'enzyme';
import Ret from "../components/Ret";

describe('', () => {

    const wrapper = shallow(<Ret/>);

    it('', () => {
        const a = <a></a>;
        expect(wrapper.containsAllMatchingElements([a])).toEqual(true);
    });

    it('', () => {
        const p = <p></p>;
        expect(wrapper.containsAllMatchingElements([p])).toEqual(true);
    })

});