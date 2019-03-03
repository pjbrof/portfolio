import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card';
import { expect } from 'chai';

describe('<Card />', () => {
  it('Renders the Card component', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('.card')).to.have.lengthOf(1);
  });
});
