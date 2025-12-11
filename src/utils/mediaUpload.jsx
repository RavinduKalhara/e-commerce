import { createClient } from "@supabase/supabase-js";
 
const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjcGlteGh0eWtxYWx1Y29tanNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU0MzUwMTcsImV4cCI6MjA4MTAxMTAxN30.-yeez_NKoTf5-k7YxkXcsps4zc0Q38hiVEuXZhGnr5Y";
const supabase_url = "https://bcpimxhtykqalucomjsn.supabase.co";

const supabase = createClient(supabase_url, anon_key);

export default async function mediaUpload(file) {

    return new Promise((resolve,reject)=>{

        if(!file){
            reject("No file is selected")
        }

        const timeStamp = new Date().getTime();
        const fileName = timeStamp+file.name;

        supabase.storage.from("images").upload(fileName, file, {
            CacheControl: '3600',
            Upsert: false,
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl("fileName").data.publicUrl
            resolve(publicUrl)
        }).catch(()=>{
            reject("Error uploading file");
        })
    }
    
    )}