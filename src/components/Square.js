import React, { Component } from 'react'

class Square extends Component {
  render() {
    return(
      <>
        <div className="box" onClick={() => {this.props.showIndex(this.props.index)}}>
          {this.props.value}   
        </div>
      </>
    )
  }
}
export default Square
