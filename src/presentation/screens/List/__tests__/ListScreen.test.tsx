import 'reflect-metadata';
import {render, waitFor} from '@testing-library/react-native';

import ListScreen from '../ListScreen';
import * as iocProvider from '../../../../container/iocProvider';
import {List} from '../../../../modules/list/domain/List';

jest.mock('../../../../container/iocProvider', () => ({
  useInjection: jest.fn(),
}));

describe('ListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly when there is no data', async () => {
    jest.spyOn(iocProvider, 'useInjection').mockReturnValue({
      getAll: jest.fn().mockResolvedValue([]),
    });

    const {getByText} = render(<ListScreen />);

    await waitFor(() => {
      expect(getByText('List Screen')).toBeDefined();
      expect(getByText('There are no items in the list')).toBeDefined();
    });
  });

  test('should render loading indicator when loading', async () => {
    jest.spyOn(iocProvider, 'useInjection').mockReturnValue({
      getAll: jest.fn().mockReturnValue(new Promise(() => {})),
    });

    const {getByTestId} = render(<ListScreen />);

    await waitFor(() => {
      expect(getByTestId(/Loading/i)).toBeDefined();
    });
  });

  test('should render error message when there is an error', async () => {
    jest.spyOn(iocProvider, 'useInjection').mockReturnValue({
      getAll: jest.fn().mockRejectedValue(new Error('Error fetching data')),
    });

    const {getByText} = render(<ListScreen />);

    await waitFor(() => {
      expect(getByText('Error getting list')).toBeDefined();
    });
  });

  test('should render list items correctly', async () => {
    const mockList = [
      new List({
        id: '1',
        name: 'Item 1',
        avatar: 'http://example.com/image1.jpg',
      }),
      new List({
        id: '2',
        name: 'Item 2',
        avatar: 'http://example.com/image2.jpg',
      }),
    ];

    jest.spyOn(iocProvider, 'useInjection').mockReturnValue({
      getAll: jest.fn().mockResolvedValue(mockList),
    });

    const {getByText} = render(<ListScreen />);

    await waitFor(() => {
      expect(getByText('List Screen')).toBeDefined();
      expect(getByText('Item 1')).toBeDefined();
      expect(getByText('Item 2')).toBeDefined();
    });
  });
});
