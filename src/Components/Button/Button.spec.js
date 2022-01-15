import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('<Button />', () => {
  it('should render the button with text', () => {
    const fn = jest.fn();
    render(<Button description="Load more posts" onClick={fn} disabled={false} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button description="Load more posts" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when postsLimit is reached', () => {
    const fn = jest.fn();
    render(<Button description="Load more posts" onClick={fn} disabled={true} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });

  it('should be enabled when postsLimit is not reached', () => {
    const fn = jest.fn();
    render(<Button description="Load more posts" onClick={fn} disabled={false} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button description="Load more posts" onClick={fn} disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
