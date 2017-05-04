import React from 'react'
import io from 'socket.io-client'
import Canvas from '../components/Canvas.jsx'

class CanvasContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {canvas: null}
  
    this.getCanvas = this.getCanvas.bind(this)
    this.socket = io('http://localhost:3000')
    this.socket.on('draw', this.draw.bind(this));
  }

  getCanvas(canvas, context){
    this.setState({canvas: canvas, context: context})
  }

  draw(coords){
    const context = this.state.context
    console.log(coords, context)
    context.beginPath();
    context.arc(coords.x, coords.y, 25, 0 , 2*Math.PI)
    context.fill()
  }

  render() {

  return (

    <div>
      <Canvas socket={this.socket} getCanvas={this.getCanvas}/>
    </div>
  )

  }
}

export default CanvasContainer