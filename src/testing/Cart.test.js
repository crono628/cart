import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cart from '../components/Cart';

afterEach(cleanup);

//testing removing items from cart
describe('Cart', () => {
  it('should remove an item from the cart', () => {
    const mockRemove = jest.fn();
    const items = [{ name: 'test', price: 1 }];
    const { getByTestId } = render(
      <Cart onRemove={mockRemove} items={items} />
    );
    const removeButton = getByTestId('remove-button');
    userEvent.click(removeButton);
    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith({ name: 'test', price: 1 });
  });
});

//testing increasing quantity of items in cart
describe('Cart', () => {
  it('should increase quantity of an item in the cart', () => {
    const mockAdd = jest.fn();
    const items = [{ name: 'test', price: 1 }];
    const { getByTestId } = render(<Cart onAdd={mockAdd} items={items} />);
    const addButton = getByTestId('add-button');
    userEvent.click(addButton);
    userEvent.click(addButton);
    userEvent.click(addButton);
    expect(mockAdd).toHaveBeenCalledTimes(3);
    expect(mockAdd).toHaveBeenCalledWith({ name: 'test', price: 1 });
  });
});
