import React from 'react'
const Home=()=>{
    return (
      <div className="home">
       <div className="card home-card">
         <h5>Sandhya</h5>
         <div className="card-image">
         <img src="https://images.unsplash.com/photo-1561385346-f9218a858231?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"/>
         </div>
        
         <div className="card-content">
           <h6>Title</h6>
           <p>This place so wonderful</p>
           <input type="text" placeholder="comment"/>
           </div>
         </div>
        </div>
    )
}
export default Home