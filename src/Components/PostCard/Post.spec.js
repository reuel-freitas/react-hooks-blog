import { render, screen } from "@testing-library/react"
import { postPropsMock } from "./mock"
import { Post } from "./Post"

const props = postPropsMock

describe('<Post />', () => {
  it('should render PostCard correctly', () => {
    render(<Post {...props} />)

    expect(screen.getByRole('img', { name: props.title }))
      .toHaveAttribute('src', props.cover)

    expect(screen.getByRole('heading', { name: props.title }))
      .toBeInTheDocument()

    expect(screen.getByText(props.body))
      .toBeInTheDocument()

    expect.assertions(3)
  })

  it('should not render posts', () => {
    render(<Post {...props} />)
    expect(screen.queryByRole('heading', { name: /title1/i })).not.toBeInTheDocument()
  })

  it('should match snapshot', () => {
    const { container } = render(<Post {...props} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
