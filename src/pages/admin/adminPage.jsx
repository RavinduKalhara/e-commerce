import AddItemPage from "./addItemPage";
import BookingsPage from "./bookingPage";
import Dashboard from "./dashboardPage";
import ItemPage from "./itemPage";
import UserPage from "./userPage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import UpdateItemPage from "./updateItem";


export default function AdminPage(){
    return(
        <div className="flex">
            
        <div className="w-[400px] h-screen bg-amber-300 flex flex-col items-center">
            <Link to = "/admin/dashboard" className="w-[300px] h-[100px]" >Dashboard</Link>
            <Link to = "/admin/bookings" className="w-[300px] h-[100px]" >Bookings</Link>
            <Link to = "/admin/items" className="w-[300px] h-[100px]" >Items</Link>
            <Link to = "/admin/users" className="w-[300px] h-[100px]" >Users</Link>
            
        </div>

        <div className="w-[calc(100vw-400px)] h-screen bg-violet-400 flex justify-center items-center">
            <Routes path = "/*">
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/bookings" element={<BookingsPage/>}/>
                <Route path="/items" element={<ItemPage/>}/>
                <Route path="/users" element={<UserPage/>}/>
                <Route path="/items/add" element={<AddItemPage/>}/>
                <Route path="/items/update" element={<UpdateItemPage/>}/>
            </Routes>
        </div>
        </div>
    )
}