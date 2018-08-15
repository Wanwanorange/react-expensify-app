import authReducer from '../../reducers/auth';

test('should set login uid', () => {
  const uid = '1234';
  const action = {
    type: 'LOGIN',
    uid
  };
  const state = authReducer(undefined, action);
  expect(state.uid).toEqual(uid);
});

test('should clear uid at logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'blah blah' }, action);
  expect(state).toEqual({});
});