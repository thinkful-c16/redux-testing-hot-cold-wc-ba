import React from 'react';
import { shallow } from 'enzyme';

import {TopNav} from './top-nav';
import { restartGame, generateAuralUpdate} from '../actions'

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should dispatch restartGame when new game button is clicked', () => {
    // const random = expect.any(Number);
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalledWith(restartGame(expect.any(Number)));
  });

  it('Should dispatch generateAuralStatus action when get status button is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = wrapper.find('.status-link');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(dispatch).toHaveBeenCalledWith(generateAuralUpdate());
  });
});
