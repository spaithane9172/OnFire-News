import React, { Component } from 'react';
import img from '../img/img.gif';
export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={img} alt='loading' style={{width:"50%"}}></img>
      </div>
    )
  }
}
