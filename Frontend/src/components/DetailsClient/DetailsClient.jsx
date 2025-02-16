import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsCard = ({

    // Picture_URL,
    // Name,
    // price,
    // description,
    // stock,
    // colors,
    // category,
    // size, 
}) => {
    const loadedClient = useLoaderData();
    console.log(loadedClient);

    return (


        <div className="flex m-10 md:mt-16 flex-col md:flex-row max-w-4xl mx-auto my-8 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            {/* Product Image */}
            <div className="w-full md:w-1/2 overflow-hidden">
                <img
                    className="w-full h-full object-contain mb-6 md:mb-0 transform transition-all duration-500 hover:scale-110"
                    src={loadedClient.Picture_URL}
                    alt={loadedClient.Name}
                />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 p-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{loadedClient.Name}</h2>
                <p className="text-xl font-semibold text-gray-700 mb-4">Price : {loadedClient.price} BDT</p>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-6">{loadedClient.description || "No description available."}</p>

                {/* Available Colors */}
                <div className="mb-6">

                    <div className="flex space-x-3 mb-4">
                        <p className="text-gray-700 font-semibold">Available Colors: {loadedClient.colors || "No Information Available."}</p>
                    </div>
                </div>

                {/* Available Sizes */}
                <div className="mb-6">

                    <div className="flex space-x-3 mb-4">
                        <p className="text-gray-700 font-semibold">Available Sizes: {loadedClient.size || "No Information Available."}</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap space-x-6">
                    <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-300 transform hover:scale-105">
                        Add to Cart
                    </button>
                    <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600 hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <Link to={"/"}>GO BACK </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;
