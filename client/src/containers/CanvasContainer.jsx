import React from 'react'
import io from 'socket.io-client'
import Canvas from '../components/Canvas.jsx'

class CanvasContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  
    this.getCanvas = this.getCanvas.bind(this)
    this.socket = io('http://localhost:3000')
    this.socket.on('draw', this.draw.bind(this));
  }

  getCanvas(canvas){
    this.setState({canvas: canvas})
  }

  draw(){
    
  }

  render() {

  return (

    <div>
      <Canvas getCanvas={this.getCanvas}/>
    </div>
  )

  }
}

export default CanvasContainer