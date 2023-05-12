import React, { Component } from 'react'
import spinner_1 from './spinner_1.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
      <img src={spinner_1} alt='loading'></img>
      </div>
    )
  }
}
export default Spinner
