import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 30
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'peanuts',
    note: '',
    amount: 50,
    createdAt: moment(0).add(6, 'd').valueOf()
  };

  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const update = { note: 'mamma mia' };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    update
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe('mamma mia');
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: 32,
    update: { note: 'mamma mia' }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const newExpenses = [{
    id: '98',
    description: 'milk',
    note: '',
    amount: 200,
    createdAt: 0
  }, {
    id: '25',
    description: 'cheese',
    note: '',
    amount: 300,
    createdAt: moment(0).subtract(4, 'd').valueOf()
  }];

  const action = {
    type: 'SET_EXPENSES',
    expenses: newExpenses
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(newExpenses);
});