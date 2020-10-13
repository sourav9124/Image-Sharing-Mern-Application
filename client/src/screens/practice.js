import React from 'react'

class Practice extends React.Component{

    state={
        name:"loading",
        title:"loading"
    }

    render(){

        return(
              <div>
                  <h1>{this.state.name}</h1>
                  <h1>{this.state.title}</h1>
              </div>
        )
    }



}
export default Practice