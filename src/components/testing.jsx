import { useState } from "react"
import { SupabaseClient } from "@supabase/supabase-js";
import mediaUpload from "../utils/mediaUpload.jsx";


export default function Testing() {

const [file,setFile] = useState(null);

function uploadFile(){
  console.log(file)
  mediaUpload(file).then((url)=>{console.log(url)})
}

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
        <input type="file" multiple onChange = {(e)=>{setFile(e.target.files[0])}}/>
        <button onClick={uploadFile} className="w-[100px] h-[50px] bg-accent rounded-2xl">
          upload
        </button>
    </div>

  )
}