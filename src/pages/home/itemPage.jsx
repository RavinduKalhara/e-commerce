import axios from "axios";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import ProductCard from "../../components/productCard"; // Assuming this is the path to your ProductCard component

export default function ItemPage(){

    const [state,setState] = useState("loading");
    const [items,setItems] = useState([]);

    // Function to handle API call and state updates
    const fetchProducts = () => {
        axios.get("http://localhost:3000/api/products/get").then(
            (res)=>{
                setItems(res.data);           
                toast.success("Loaded successfully");
                setState("success")
            }
        ).catch(
            (error)=>{
                toast.error(error?.response?.data?.error || "An error occurred");
                setState("error"); // Set state to error to stop loading indicator
            }
        )
    };

    useEffect(
        ()=>{
            fetchProducts();
        },[]
    );

    return(
        <div className="w-full h-full flex flex-wrap justify-center pt-10 p-4 gap-6">
            {
                state=="loading" &&
                <div className="w-full h-full flex justify-center items-center">
                    <div className="w-[50px] h-[50px] border-4 rounded-full border-t-green-300 animate-spin"></div>
                </div>
            }
            {
                state=="success" && items.length === 0 &&
                <div className="text-gray-500 text-xl mt-10">No products found.</div>
            }
            {
                // FIX: Use implicit return (wrap the JSX in parentheses) and provide a unique key, 
                // and pass the product data as a prop (e.g., 'productData')
                state=="success" &&
                items.map((item) => (
                    // We use item._id as the unique key as recommended by React
                    <ProductCard key={item._id} productData={item} /> 
                ))
            }
            
            {
                state=="error" &&
                <div className="text-red-500 text-xl mt-10">
                    Failed to load products. Please check the API endpoint.
                </div>
            }
        </div>
    )
}