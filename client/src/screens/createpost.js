import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Createpost=()=>{
   const history=useHistory()
   const [title,setTitle]= useState("")
   const [body,setBody]= useState("")
   const [image,setImage]= useState("")
   const [url,setUrl]=useState("")

   
 useEffect(()=>{
   if(url)
   {

   

  fetch('/createpost',{
    method:'post',
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem('jwt')
   },
    body:JSON.stringify({
      title,
      body,
      pic:url
    })

  }).then(res=>res.json())
  .then(data=>{
    //console.log("post created successfully !");

    if(data.error)
    {
     M.toast({html: data.error,classes:'#d50000 red accent-4'})
    }
    else{
     M.toast({html: "post created successfully",classes:'#1b5e20 green darken-4'})
     history.push('/')

     
    }
  })
  .catch(err=>{
    console.log(err);
  })
}

 },[url])
   const postDetails=()=>{
    
    const data=new FormData()
    data.append('file',image)
    data.append('upload_preset','project')
    data.append('cloud_name','sourav9124')

    fetch('https://api.cloudinary.com/v1_1/sourav9124/image/upload',{

       method:'post',
       body:data
    }).then(res=>res.json())
    .then(data=>{
      setUrl(data.url)
      console.log(data);
    }).catch(err=>{
      console.log(err);
    })

    

   }


  

    return (

        <div className="card card-header">
            <div className="card-container">
            <h3 className="create">CreatePost</h3>
              <input 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
               type="text" placeholder="title"/>
              <input
                value={body}
                onChange={(e)=>setBody(e.target.value)}
              
                type="text" placeholder="body"/>
              <div class="file-field input-field ">
      <div class="btn #1976d2 blue darken-2">
        <span>Upload Image</span>
        <input
       
        onChange={(e)=>setImage(e.target.files[0])}
         className="files " type="file"/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
    </div>
              

              <button class="btn waves-effect waves-light #1976d2 blue darken-2" type="submit" name="action"
               onClick={()=>postDetails()}
              >CreatePost
             
              </button>

              

            </div>
        </div>

    );
}
export default Createpost