import React from 'react'
import io from 'socket.io-client'
import Canvas from '../components/Canvas.jsx'

class CanvasContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  
  
this.socket = io('http://localhost:3000')
this.socket.on('draw', this.draw.bind(this));

}


draw(){
  
}


render() {

return (

  <div>

    <h1>Lets draw something soon</h1>


  </div>


  )

}







}








export default CanvasContainer