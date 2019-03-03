import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';
import { expect } from 'chai';

describe('<Sidebar />', () => {
  it('Renders the sidebar component', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('.sidebar')).to.have.lengthOf(1);
  });
});
