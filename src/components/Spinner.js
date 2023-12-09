import React, { Component } from 'react'
import "./loader.css"
export class Spinner extends Component {
  render() {
    return (
        <div class="loader position-absolute top-50 start-50 translate-middle"></div>
    )
  }
}

export default Spinner