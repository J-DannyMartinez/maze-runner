import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Navbar from '../client/Navbar';

configure({adapter: new Adapter()});

xdescribe('All enzyme tests', () => {
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  xdescribe('Put tests here', () => {});
  describe('Nav Button Tests', () => {
    let wrapper;
    const props = {
      
    };
    beforeAll(() => {
      wrapper = shallow(<Navbar {...props} />);
    });

  });
});