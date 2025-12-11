export default function ProductCard({ productData }) {

    const item = productData;
    if (!item) return null;

    const isAvailable = item.availability;
    const availabilityStatus = isAvailable ? "In Stock" : "Out of Stock";
    const availabilityColor = isAvailable ? "bg-green-500" : "bg-red-500";

    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    }).format(item.price);

    const imageUrl = `https://placehold.co/600x400/3b82f6/ffffff?text=${item.name.toUpperCase().replace(/\s/g, '+')}`;

    return (
        <div id="product-card" className="bg-white max-w-sm w-full rounded-2xl shadow-xl overflow-hidden transform hover:shadow-2xl transition duration-300 ease-in-out">

            <div className="h-64 bg-gray-200 relative">
                <img 
                    src={imageUrl} 
                    alt={`Product image for ${item.name}`} 
                    className="w-full h-full object-cover" 
                />

                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    {item.category || 'N/A'}
                </span>

                <span className={`absolute top-3 right-3 ${availabilityColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md`}>
                    {availabilityStatus}
                </span>
            </div>

            <div className="p-6 space-y-4">
                
                <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
                    {item.name || 'Untitled Product'}
                </h1>

                <div className="flex items-baseline space-x-2">
                    <span className="text-4xl font-extrabold text-blue-600">
                        {formattedPrice}
                    </span>

                </div>

                <div className="text-sm text-gray-600 border-t border-gray-100 pt-4">
                    <p className="flex justify-between">
                        <span className="font-medium text-gray-800">Dimensions:</span> 
                        <span className="font-mono bg-gray-100 px-2 rounded-md">{item.dimensions || 'N/A'}</span>
                    </p>
                    <p className="flex justify-between mt-1">
                        <span className="font-medium text-gray-800">Product ID:</span>
                        <span className="truncate ml-2 text-right text-xs">{item._id}</span>
                    </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                    <p className="text-sm italic text-gray-500">
                        Description: {item.description || 'No description provided.'}
                    </p>
                </div>


                <button 
                    className={`w-full font-semibold py-3 rounded-xl transition duration-150 shadow-lg 
                        ${isAvailable 
                            ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] shadow-blue-500/50' 
                            : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                        }`}
                    disabled={!isAvailable}
                >
                    {isAvailable ? 'Add to Cart' : 'Out of Stock'}
                </button>

                <div className="text-center text-xs text-gray-400">
                    Free standard shipping on all orders.
                </div>

            </div>
        </div>
    )
}