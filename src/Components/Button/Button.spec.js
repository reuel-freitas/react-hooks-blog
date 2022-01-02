import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('<Button />', () => {
    it('should render the button with text', () => {
        render(<Button description="Load more posts" />)

        expect.assertions(1);

        const button = screen.getByRole('button', { name: /load more/i });
        expect(button).toBeInTheDocument();
    });

    it('should call function on button click', () => {
        const fn = jest.fn();
        render(<Button description="Load more posts" onClick={fn} />)

        const button = screen.getByRole('button', { name: /load more/i });

        userEvent.click(button);
        expect(fn).toHaveBeenCalled();
    })
})