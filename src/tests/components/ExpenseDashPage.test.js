import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashPage from '../../components/ExpenseDashPage';

test('should render ExpenseDashPage', () => {
  const wrapper = shallow(<ExpenseDashPage />);
  expect(wrapper).toMatchSnapshot();
});