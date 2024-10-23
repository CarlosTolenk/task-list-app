// TaskScreen.test.tsx

import React from 'react';
import {render, fireEvent, waitFor, act} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {TaskScreen} from '../index';

const mockStore = configureStore([]);

// @ts-ignore
const renderWithRedux = (component, {initialState} = {}) => {
  const store = mockStore(initialState);
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe('TaskScreen', () => {
  it('should render the task list', () => {
    const initialState = {tasks: {tasks: []}};
    const {getByText} = renderWithRedux(<TaskScreen />, {initialState});

    expect(getByText(/To Do List/i)).toBeTruthy();
  });

  it('should open the modal when "Add New Task" is pressed', () => {
    const initialState = {tasks: {tasks: []}};
    const {getByText, getByPlaceholderText} = renderWithRedux(<TaskScreen />, {
      initialState,
    });

    fireEvent.press(getByText(/Add New Task/i));
    expect(getByPlaceholderText(/Name of task/i)).toBeTruthy();
  });

  it('should add a new task', async () => {
    const initialState = {tasks: {tasks: []}};
    const {getByText, getByPlaceholderText} = renderWithRedux(<TaskScreen />, {
      initialState,
    });

    fireEvent.press(getByText(/Add New Task/i));

    await act(async () => {
      fireEvent.changeText(getByPlaceholderText(/Name of task/i), 'Test Task');
    });

    expect(getByPlaceholderText(/Name of task/i).props.value).toBe('Test Task');

    await act(async () => {
      fireEvent.press(getByText(/Add Task/i));
    });
  });

  it('should delete a task', async () => {
    const initialState = {
      tasks: {
        tasks: [{id: 1, name: 'Test Task', description: 'Task description'}],
      },
    };
    const {getByText} = renderWithRedux(<TaskScreen />, {initialState});

    expect(getByText(/Test Task/i)).toBeTruthy();

    fireEvent.press(getByText(/Delete/i));
  });
});
