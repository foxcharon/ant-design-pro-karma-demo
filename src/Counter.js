import React, { Component } from 'react'

export default class Counter extends Component {
  render() {
    const { count } = this.props

    window.localStorage.setItem("abc", "123")

    return (
      <div>
        <span id='counter'>{ count }</span>
      </div>
    )
  }
}