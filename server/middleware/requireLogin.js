const jwt=require('jsonwebtoken')
const {JWT_SECRET}=require('../keys')
const mongoose=require('mongoose')
const Signup=mongoose.model('Signup')

module.exports=(req,res,next)=>{
   
    const {authorization}=req.headers
    if(!authorization)
    {
      return res.status(401).json("You are not logged in !")
    }
    const token=authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        const {id}=payload

        Signup.findById(id)
        .then(userdata=>{
            req.user=userdata
            next()
        })
        

        

    })
    


}