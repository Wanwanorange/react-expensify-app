export default (expenses) => {
  const amounts = expenses.map(expense => expense.amount);
  const reducer = (acc, val) => acc + val;
  return amounts.reduce(reducer, 0);
};