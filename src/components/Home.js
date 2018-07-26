import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div className="container">
          <div className="col-lg-12">
          <Link to="/membros">Membros</Link>
          </div>
          <div className="col-lg-12" style={{marginTop:"30px"}}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac augue sit amet ante pretium tempor. Nunc id porta diam. Suspendisse rutrum quis est ac bibendum. Duis non massa venenatis massa tristique dictum et sit amet nisi. Donec efficitur sed diam ut maximus. Curabitur ac ultrices nisi. Integer eget interdum odio, et pretium arcu.</p>
            <p>Aenean posuere, massa sit amet aliquet scelerisque, est tellus faucibus eros, iaculis pellentesque urna odio sit amet tortor. Sed at sem libero. Nulla aliquam purus ac dui tempus posuere. Duis non auctor metus, quis bibendum lorem. Aliquam placerat nulla sit amet placerat semper. Vivamus nisl orci, egestas non egestas vitae, suscipit nec nisl. Pellentesque molestie vitae lectus sed posuere. Pellentesque a dolor vel ante viverra eleifend. Nulla leo lacus, rutrum id venenatis mollis, tempor at odio.</p>
          </div>
      </div>
    )
  }
}