import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Header from './../components/Header';

import Adapter from 'enzyme-adapter-react-16';
import App from "../components/App";
configure({ adapter: new Adapter() });

describe('Header component testing', function () {
    it('renders gr1d99', function () {
        const wrapper = shallow(<Header/>);
        const header = <h4 className='display-4'>gr1d99</h4>;
        expect(wrapper.contains(header)).to.equal(true);
    });
});