import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<Feedback />);
    });
});

it('Renders some feedback', () => {
    let TEST_FEEDBACK = 'You are listening to a game!';
    let TEST_GUESS_COUNT = 4;

    let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} guessCount={TEST_GUESS_COUNT} />);
    expect(wrapper.contains(TEST_FEEDBACK, TEST_GUESS_COUNT)).toEqual(true);
});