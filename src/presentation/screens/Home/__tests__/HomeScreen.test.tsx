import 'reflect-metadata';
import {fireEvent, render} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

const mockUseDispatch = jest.fn();

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useDispatch: jest.fn().mockImplementation(() => {
      return mockUseDispatch;
    }),
  };
});

describe('HomeScreen', () => {
  test('should renders correctly', async () => {
    const {getByText} = render(<HomeScreen />);

    const textDefault = getByText(/Home/i);
    const button = getByText(/LogOut/i);

    expect(textDefault).toBeDefined();
    expect(button).toBeDefined();
  });

  test('should dispatch the action to log out when the button is pressed', () => {
    const {getByText} = render(<HomeScreen />);

    const button = getByText(/LogOut/i);
    fireEvent.press(button);

    expect(mockUseDispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: 'auth/authLogOut',
    });
  });
});
