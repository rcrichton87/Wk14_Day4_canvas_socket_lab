import React from 'react'

class Canvas extends React.Component{
  constructor(props){
    super(props)
    this.canvas = null
    this.context = null
  }

  componentDidMount(){
    this.canvas = document.getElementById("canvas")
    this.context = this.canvas.getContext('2d')
    this.props.getCanvas(this.canvas)

    console.log(this.context)

  }

  onClick(event){

    console.log(this.context.beginPath())
    this.context.beginPath();
    this.context.arc(event.clientX, event.clientY, 25, 0 , 2*Math.PI)
    this.context.fill()
  }

  render(){
    return(
      <canvas id="canvas" height="500" width="500" onClick={this.onClick.bind(this)}/>
    )
  }

}

export default Canvas