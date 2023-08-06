'use client'
import React, { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useSession } from "next-auth/react";
import Image from "next/image";
// import ReactQuill from "react-quill";
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false
  }
);



const page = () => {
  const {data:session}=useSession()
  const quillRef = React.useRef(false)
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const [tags,setTag]=useState('')
  const [photo,setPhoto]=useState('')
  const handleClick=async()=>{
    const response= await axios.post("/api/posts",{
      title,
      description,
      tags,
      username:session?.user.email,
      photo
    })
    alert(response.data)
  }

  const convert=(e)=>{
    // console.log(e)
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0])
    reader.onload=()=>{
      console.log(reader.result)
      setPhoto(reader.result)
    }
    reader.onerror=(error)=>{
      console.log(error)
    }
  }

  return (
    <div>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="title">Title</label>
        </div>
        <input
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
          className="border border-2 border-black rounded-lg"
          type="text"
          id="title"
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="desc">Description</label>
        </div>
        {/* <ReactQuill value={description} onChange={(e)=>setDescription(e.target.value)} forwardedRef={quillRef} /> */}
        <input className="border border-2 border-black" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="tag">Tag</label>
        </div>
        <input
        value={tags}
        onChange={(e)=>{setTag(e.target.value)}}
          className="border border-2 border-black rounded-lg"
          type="text"
          id="tag"
        />
      </div>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="photo">Photo</label>
        </div>
        <input
        
        onChange={convert}
          className="border border-2 border-black rounded-lg"
          type="file"
          id="photo"
        />
      </div>
      <div>{
        photo!=""&&(
          <Image src={photo} height={100} width={100}/>
        )
        }</div>
      <div><button onClick={handleClick} className="p-3 text-center font-bold bg-green-700 text-white rounded-lg">Submit</button></div>
    </div>
  );
};

export default page;
