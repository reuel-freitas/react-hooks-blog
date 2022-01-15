import { render, screen } from '@testing-library/react'
import { Warning } from "./Warning"

const WarningMock = {
  warningMsg: 'este é um warning',
}

describe('<Warning />', () => {
  it('should not render Warning', () => {
    render(<Warning msg={WarningMock.warningMsg} />)
    expect(screen.getByText(WarningMock.warningMsg))
      .toBeInTheDocument()
  })
})
