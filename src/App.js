import React, { Component } from 'react'
import './App.css'
import Square from './components/Square'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    }
  }

  showIndex = (index) => {
    alert(index)
  }

  render() {
    return(
      <>
        <h1>Treasure Hunt Game</h1>
        <div className="board">
          {this.state.board.map((value, index) => {
            return( 
              <Square 
                value={value}
                key={index}
                index={index}
                showIndex={this.showIndex} 
              />
            )
          })}
        </div>
      </>
    )
  }
}
export default App
