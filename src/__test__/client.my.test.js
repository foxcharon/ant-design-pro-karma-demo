import React from 'react'
// import { renderIntoDocument } from 'react-addons-test-utils'
import { renderIntoDocument } from 'react-dom/test-utils';
import ReactDOM from 'react-dom'

import Counter from '../Counter'

function renderComponent(count) {
  const renderer = renderIntoDocument(
    <Counter count={count}/>
  )
  return ReactDOM.findDOMNode(renderer)
}

describe('Counter', () => {
  it('should be renderered', () => {
    const dom = renderComponent()
    expect(dom).not.toBeUndefined()
  })

  it('should render correct number', () => {
    const dom = renderComponent(10)
    const count = dom.querySelector('#counter').textContent
    expect(count).toBe('10')
  })
})