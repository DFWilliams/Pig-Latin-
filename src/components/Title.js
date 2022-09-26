import React, { Component } from 'react'
import pigChat from '../assets/pigChat.png'

export class Title extends Component {
  render() {
    return (
      <>
        <div className="title">
            <h1>Pig Latin Translator</h1>
            <h3>Speak like the high Valarians of the pig world!</h3>
        </div>
        <div className="pigBit">
        <img
          src={pigChat}
          alt="a bitmoji talkin to pigs"
          className="pigChat"
        />
        </div>
      </>
    )
  }
}

export default Title