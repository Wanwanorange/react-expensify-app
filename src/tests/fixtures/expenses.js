import moment from 'moment';

export default [{
  id: '1',
  description: 'Sauce',
  note: '',
  amount: 200,
  createdAt: 0
}, {
  id: '2',
  description: 'Juice',
  note: '',
  amount: 300,
  createdAt: moment(0).subtract(4, 'd').valueOf()
}, {
  id: '3',
  description: 'gummies',
  note: '',
  amount: 400,
  createdAt: moment(0).add(4, 'd').valueOf()
}];