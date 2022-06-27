import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Showroom from '../components/Showroom';
import App from '../App';
import Item from '../components/Item';

afterEach(cleanup);

const data = [
  {
    name: 'Sony Betamax',
    src: 'https://www.extremetech.com/wp-content/uploads/2015/11/772066351852676897.jpg',
    description: 'The future of home video, forever',
    price: 999,
    id: 1,
  },
];

afterEach(() => {
  cleanup();
});

describe('Showroom', () => {
  it('data renders and has a buy button', () => {
    const onAdd = jest.fn();
    const { getByTestId, container } = render(
      <Showroom onAdd={onAdd} inventory={data} />
    );
    const buyButton = getByTestId('buy-button');
    expect(buyButton.tagName).toBe('BUTTON');
    expect(buyButton.textContent).toBe('Add To Cart');
    fireEvent.click(buyButton);
    expect(onAdd).toBeCalledTimes(1);
    fireEvent.click(buyButton);
    expect(onAdd).toBeCalledTimes(2);
    expect(container.firstChild).toMatchSnapshot();
  });
});

test('onAdd should be called', () => {
  const mockProduct = jest.fn();
  const mockAdd = jest.fn();

  render(<Item product={mockProduct} onAdd={mockAdd} />);

  const button = screen.getByRole('button', { name: 'Add To Cart' });
  userEvent.click(button);
  userEvent.click(button);
  userEvent.click(button);
  expect(mockAdd).toHaveBeenCalledTimes(3);
});
