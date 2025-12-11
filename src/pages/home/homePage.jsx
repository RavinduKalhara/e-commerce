import { Link } from "react-router-dom"
import Header from "../../components/header"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import ContactPage from "./contactPage"
import GalleryPage from "./galleryPage"
import ItemPage from "./itemPage"
import ErrorPage from "./errorPage"
import Home from "./home"

export default function HomePage() {
    return (
        <>         
            <Header/>
            <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center bg-primary">
                <Routes path = "/*">
                    <Route path = "/contact" element ={<ContactPage/>}/>
                    <Route path = "/gallery" element ={<GalleryPage/>}/>
                    <Route path = "/items" element ={<ItemPage/>}/>
                    <Route path = "/" element ={<Home/>}/>
                    <Route path = "/*" element ={<ErrorPage/>}/>

                </Routes>
            </div>
        </>
        
    )
}