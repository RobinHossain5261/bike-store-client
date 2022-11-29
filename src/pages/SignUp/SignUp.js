import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const googleProvider = new GoogleAuthProvider();

    // const [createdUserEmail, setCreatedUserEmail] = useState('');
    // const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();

    const { createUser, updateUser, providerLogin } = useContext(AuthContext);

    const handalSignUp = data => {
        console.log(data);
        setSignUpError('');

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User created successful.");
                navigate('/');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUsers(data.name, data.email, data.role)

                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            })
    }
    const handaleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => console.error(error))
    }

    const saveUsers = (name, email, role) => {
        const user = { name, email, role };
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                // setCreatedUserEmail(email);
                getUserToken(email);
            });
    };

    const getUserToken = email => {
        fetch(`http://localhost:5000/jwt?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.accessToken) {
                    localStorage.setItem('accessToken', data.accessToken);
                    navigate('/');
                }
            })
    }


    return (
        <div className='flex h-[800px] justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handalSignUp)}>


                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", { required: "Name is required" })}
                            placeholder="name"
                            className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email Address is required" })}
                            placeholder="email"
                            className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must at lest 6 charecters' },
                                pattern: { value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, message: 'password must one upperCase, lowerCase and number' }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }


                    <div id="select">
                        <label className="label">
                            <span className="label-text">Select your role</span>
                        </label>
                        <div className=" block">
                            <label htmlFor="countries" value="User Type" />
                        </div>
                        <select
                            {...register("role", { required: true })}
                            id="countries"
                            required={true}
                            className="input input-bordered w-full"
                        >
                            <option value="seller">Seller</option>
                            <option value="buyer">Buyer</option>
                        </select>
                    </div>






                    <input className='btn btn-primary w-full mt-3' value="Sign Up" type="submit" />
                </form>
                <p>Already have an account <Link to='/login' className='text-primary'>Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handaleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;