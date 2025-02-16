import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddNewClients = () => {
    const [formData, setFormData] = useState({
        Name: "",
        description: "",
        Picture_URL: "",
        stock: "",
        colors: "",
        price: "",
        category: "",
        size: ""

    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);

        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Inform the server about the content type
            },
            body: JSON.stringify(formData), // Convert formData to a JSON string
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data); // Handle response data here

                // Reset the form state after submission
                setFormData({
                    Name: "",
                    description: "",
                    stock: "",
                    colors: "",
                    price: "",
                    category: "",
                    size: "",
                    Picture_URL: ""
                });
                Swal.fire({
                    title: "Good job!",
                    text: "Product Information Save.",
                    icon: "success"
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error); // Error handling
            });
    };

    return (
        <div className="max-w-4xl mx-auto py-6 ">
            <h2 className="text-3xl font-bold text-center mb-6">Submit Your Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Name"
                    />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input
                        type="text"
                        name="Picture_URL"
                        value={formData.Picture_URL}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Picture URL"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Description"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Stock</span>
                    </label>
                    <input
                        type="text"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Stock"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Colors</span>
                    </label>
                    <input
                        type="text"
                        name="colors"
                        value={formData.colors}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Colors"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Price"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Category"
                    />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Size</span>
                    </label>
                    <input
                        type="text"
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Product Size"
                    />
                </div>



                {/* Submit Button */}
                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewClients;
