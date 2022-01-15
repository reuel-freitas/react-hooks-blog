import { render, screen } from '@testing-library/react';
// import { userEvent } from '@testing-library/user-event';
import { Input } from './Input';

describe('<Input />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<Input handleChange={fn} searchValue={'Testando'} />);

    const input = screen.getByPlaceholderText(/type to search/i);
    expect(input).toBeInTheDocument();

    expect(input.value).toBe('Testando');
  });

  // it('should call handleChange function on each key pressed', () => {
  //   const fn = jest.fn();
  //   render(<Input handleChange={fn} searchValue="um valor" />);

  //   const input = screen.getByPlaceholderText(/type to search/i);
  //   const value = 'o valor';

  //   userEvent.type(input, value);

  //   expect(input.value).toBe('um valor');
  //   expect(fn).toHaveBeenCalledTimes(value.length);
  // });

  it('should matchs snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Input handleChange={fn} searchValue="" />);
    expect(container).toMatchSnapshot();
  });
});
