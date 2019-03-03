import React from 'react';
import { shallow } from 'enzyme';
import Filter from '../Filter';
import { expect } from 'chai';

describe('<Filter />', () => {
  it('Renders the Filter component', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('.filter')).to.have.lengthOf(1);
  });

  it('Should render a list of filters', () => {
    const wrapper = shallow(<Filter />);
    expect(wrapper.find('.filter-item')).to.have.lengthOf(5);
  });
});
