import React,{useState,useEffect} from "react";
import "./CreateCards.css";
import { toast } from 'react-toastify';
import { useNavigate} from  'react-router-dom'
import Imgicongif from '../img/img_icon_upload.gif'



export default function CreateCards() {
  const navigate = useNavigate()
  const [itemName ,setItemName]= useState("");
  const [price ,setPrice]= useState("");
  const [category ,setCategory]= useState("");
  const [image ,setImage]= useState("")
  const [url,setUrl]=useState("")

   //Toast Function
   const notifyA = (msg) => toast.error(msg);
   const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
     //saving post to mongodb
     if(url){
     fetch("http://localhost:5000/createPost",{
      method:"post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("jwt")
        
      },
      body: JSON.stringify({
        itemName,
        price,
        category,
        pic:url
      })


    }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          notifyA(data.error)
        }
        else{
          notifyB('Successfully Posted')
          navigate('/')
        }
      })
      .catch(err=>console.log(err))
  }

    
  }, [url])
  


  //posting image to 
  const postDeails = () =>{
    console.log(itemName,price,category,image)

    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "foodCard")
    data.append("cloud_name", "dykhwoa5a")
    fetch("https://api.cloudinary.com/v1_1/dykhwoa5a/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err))
    // console.log(url)

   


  }

  

  const loadfile = (event) => {
    var output = document.getElementById("output");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // free memory
    };
  };
  return (
    <div className="createPost">
      {/* //header */}
      <div className="post-header">
        <h2 style={{ margin: "3px auto" }}>Add a new Pizza</h2>
        
      </div>
      {/* image preview */}
      <div className="main-div">
        <img
          id="output"
          // src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png"
          src={Imgicongif}
         
        />
         <div className="input-typefile-div">
        <label for="file-upload" class="custom-file-upload">
    <i class="fas fa-upload"></i> Choose File
</label>

       
          <input
        id="file-upload"
          type="file"
          accept="image/*"
          
          onChange={(event) => {
            loadfile(event);
            setImage(event.target.files[0])
            
          }}
        /></div>
      </div>
      {/* details */}
      <div className="details">
        <div className="card-header">
        
         
        </div>
        
        <input type="text" value={itemName} onChange={(e)=>{setItemName(e.target.value)}} placeholder="ItemName" />
        <input type="text" value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder="Price" />
        <input type="text" value={category} onChange={(e)=>{setCategory(e.target.value)}} placeholder="Category" />
        <div className="post-btn-div"><button id="post-btn" onClick={()=>{postDeails()}} >Add</button></div>
        

      </div>
    </div>
  );
}