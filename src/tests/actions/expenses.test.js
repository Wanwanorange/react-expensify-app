import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense({ id: '1234' }, { amount: 1000 });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '1234',
    update: { amount: 1000 }
  });
});

test('should setup add expense action object w provided vals', () => {
  const expenseData = {
    description: 'juice',
    amount: 200,
    createdAt: 190000,
    notes: 'Yummy yummy'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action obj w default vals', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      notes: '',
      amount: 0,
      createdAt: 0
    }
  });
});