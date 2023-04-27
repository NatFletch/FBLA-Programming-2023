import { render } from '@redwoodjs/testing/web'

import NavbarLayout from './NavbarLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NavbarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavbarLayout />)
    }).not.toThrow()
  })
})
