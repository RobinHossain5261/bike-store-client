import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddBike = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { loading } = useContext(AuthContext);

    const imageHostKey = process.env.REACT_APP_imagebb_key;
    const navigate = useNavigate();


    const { data: categories } = useQuery({
        queryKey: ['productCategory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/productCategory');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        // console.log(data.image[0].lastModifiedDate)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const product = {
                        name: data.name,
                        email: data.email,
                        category: data.category,
                        image: imgData.data.url,
                        productName: data.productName,
                        phone: data.phone,
                        orginalPrice: data.orginalPrice,
                        newPrice: data.newPrice,
                        condition: data.condition,
                        date: data.date,
                        used: data.used,
                        location: data.location,
                        description: data.description
                    }

                    //save product information to the database
                    fetch('http://localhost:5000/myproducts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product added successfully.');
                            navigate('/dashboard/myproduct');
                        })
                }
            })
    }

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-5">Add A Product</h1>
            <form onSubmit={handleSubmit(handleAddProduct)}
                className="lg:w-[650px] border border-gray-400 rounded-xl p-8"
            >

                <div className='grid grid-cols-1 gap-x-5 lg:grid-cols-2'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select
                            {...register('category')}
                            className="select select-bordered w-full">
                            {
                                categories?.map(category => <option
                                    key={category._id}
                                    value={category.category}
                                >{category.category}</option>)
                            }
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Used</span>
                        </label>
                        <select
                            {...register('used')}
                            className="select select-bordered w-full max-w-xs">
                            <option>1 year</option>
                            <option>2 year</option>
                            <option>3 year</option>
                            <option>4 year</option>
                            <option>5 year</option>
                            <option>6 year</option>
                            <option>7 year</option>
                            <option>8 year</option>
                            <option>9 year</option>
                            <option>10 year</option>
                            <option>11 year</option>
                            <option>12 year</option>
                        </select>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="file"
                            {...register("image", { required: "image is required" })}
                            className="input input-bordered w-full" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text"
                            {...register("productName", { required: "Product name is required" })}
                            className="input input-bordered w-full" />
                        {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text"
                            {...register("phone", { required: "Phone is required" })}
                            className="input input-bordered w-full" />
                        {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Orginal Price</span>
                        </label>
                        <input type="text"
                            {...register("orginalPrice", { required: "Price is required" })}
                            className="input input-bordered w-full" />
                        {errors.orginalPrice && <p className='text-red-600'>{errors.orginalPrice?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">New Price</span>
                        </label>
                        <input type="text"
                            {...register("newPrice", { required: "price is required" })}
                            className="input input-bordered w-full" />
                        {errors.newPrice && <p className='text-red-600'>{errors.newPrice?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <input type="text"
                            {...register("condition", { required: "condition is required" })}
                            className="input input-bordered w-full" />
                        {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text"
                            {...register("location", { required: "location is required" })}
                            className="input input-bordered w-full" />
                        {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="text"
                            {...register("date", { required: "Date is required" })}
                            className="input input-bordered w-full" />
                        {errors.date && <p className='text-red-600'>{errors.date?.message}</p>}
                    </div>

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text"
                        {...register("description", { required: "description is required" })}
                        className="input input-bordered w-full h-24" />
                    {errors.description && <p className='text-red-600'>{errors.description?.message}</p>}
                </div>

                <input className='btn  w-full mt-3' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddBike;