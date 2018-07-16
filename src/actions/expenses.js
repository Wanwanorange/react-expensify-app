import uuid from 'uuid';
import database from '../firebase/firebase';

//ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      notes = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, notes, amount, createdAt };
    return database.ref('expenses')
      .push(expense)
      .then((ref) => {
        dispatch(addExpense({
          id: ref.key,
          ...expense
        }));
      });
  };
};

//REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
export const editExpense = ({ id }, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpenses = () => {

  return (dispatch) => {
    return database.ref('expenses')
      .once('value')
      .then((snapshot) => {
        const expenseData = [];
        snapshot.forEach((childSnapshot) => {
          expenseData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          })
        });
        dispatch(setExpenses(expenseData));
      });
  };
};