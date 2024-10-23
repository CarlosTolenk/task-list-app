// HomeScreen.test.tsx
import 'reflect-metadata';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useHomeViewModel} from '../HomeViewModel';
import {HomeScreen} from '../index';

jest.mock('../HomeViewModel');

describe('HomeScreen', () => {
  const onNavigationMock = jest.fn();

  beforeEach(() => {
    (useHomeViewModel as jest.Mock).mockReturnValue({
      onNavigation: onNavigationMock,
    });
  });

  it('should render correctly', () => {
    const {getByText} = render(<HomeScreen />);

    expect(getByText(/Tasks/i)).toBeTruthy();
    expect(getByText(/List/i)).toBeTruthy();
  });

  it('should navigate to Tasks on button press', () => {
    const {getByText} = render(<HomeScreen />);

    fireEvent.press(getByText(/Tasks/i));

    expect(onNavigationMock).toHaveBeenCalledWith('Task');
  });

  it('should navigate to List on button press', () => {
    const {getByText} = render(<HomeScreen />);

    fireEvent.press(getByText(/List/i));

    expect(onNavigationMock).toHaveBeenCalledWith('List');
  });
});
