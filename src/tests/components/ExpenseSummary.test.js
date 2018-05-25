import React from 'react';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should correctly display message for one expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly display message for multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={30} expensesTotal={23098725}/>);
  expect(wrapper).toMatchSnapshot();
});