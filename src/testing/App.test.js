import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

afterEach(cleanup);

describe('<App/>', () => {
  it('shows the welcome page first', () => {
    const { getByRole, container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(getByRole('img')).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('displays products from the navbar', () => {
    const { container, getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const store = getByTestId('store-btn');
    userEvent.click(store);
    expect(screen.getByText('Products')).toBeVisible();
    expect(container.firstChild).toMatchSnapshot();
  });
});
