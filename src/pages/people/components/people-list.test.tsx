import PeopleList from './people-list';
import Table from 'components/table';
import { render } from '@testing-library/react';
import { IPerson } from 'types';

const mockPeopleList: IPerson[] = [
  {
    name: 'Rocky',
    favoriteMovie: 'Back to The Future',
    date: new Date(),
  },
  {
    name: 'Miroslav',
    favoriteMovie: 'American Psycho',
    date: new Date(),
  },
];

jest.mock('components/table', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="table">table component</div>),
}));

jest.mock('queries/entities/people', () => ({
  usePeople: () => ({
    data: mockPeopleList,
    refetch: jest.fn,
    isLoading: false,
  }),
}));

describe('People List', () => {
  it('should render components', () => {
    render(<PeopleList />);
    expect(Table).toHaveBeenCalledWith(
      expect.objectContaining({
        rows: mockPeopleList,
        sortBy: 'name',
        sortDir: 'desc',
      }),
      expect.anything(),
    );
  });
});
