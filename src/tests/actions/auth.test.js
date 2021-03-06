import { login, logout } from '../../actions/auth';

test('should generate login object', () => {
  const uid = '1234';
  const action = login(uid);
  expect(action).toEqual({
    type: 'LOGIN',
    uid
  });
});

test('should generate logout object', () => {
  const action = logout();
  expect(action).toEqual({ type: 'LOGOUT' });
});