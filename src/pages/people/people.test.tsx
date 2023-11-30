import People from './people';
import PeopleList from './components/people-list';
import { render, screen } from '@testing-library/react';

jest.mock('./components/people-list', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="table">People list</div>),
}));

describe('People', () => {
  it('should render components', () => {
    render(<People />);
    expect(screen.getByText('People')).toBeInTheDocument();
    expect(PeopleList).toHaveBeenCalled();
  });
});
