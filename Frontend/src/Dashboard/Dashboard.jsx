import React, { useContext } from 'react';
import Nav from '../Home/Nav/Nav';
import { Link } from 'react-router-dom';
import AddNewClients from './AddNewClients';
import { AuthContext } from '../providers/authprovider';

const Dashboard = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire("Logout completed")
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    footer: "<>Can't LogOut<>"
                });
            })
    }
    return (
        <div className='grid grid-cols-8 bg-pink-300 h-screen'>
            <div className="bg-stone-600 p-8 col-span-2 fixed h-full">
                <div className=' hover:bg-stone-300 rounded p-2'>
                    <Link to={'/dashboard'} className=" rounded flex ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-purple-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <p className=" ml-6 mt-1 text-white hover:text-gray-600">Home | Dashboard</p>
                    </Link>
                </div>
                <div className=' bg-stone-300 rounded p-2 mt-2'>
                    <Link to={'/dashboard'} className=" rounded flex ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-8 h-8 text-blue-500"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12 4.5a1 1 0 011 1v5.5h5.5a1 1 0 110 2H13v5.5a1 1 0 11-2 0V13H5.5a1 1 0 110-2H11V5.5a1 1 0 011-1z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <p className=" ml-6 mt-1 text-white text-gray-900">Add New Clients</p>
                    </Link>
                </div>
                <hr className='my-10' />
                <div className=' hover:bg-stone-300 rounded p-2'>
                    <Link to={'/'} className=" rounded flex ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 text-blue-500"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 9.75L12 3l9 6.75v8.25a2.25 2.25 0 01-2.25 2.25h-3.75a2.25 2.25 0 01-2.25-2.25v-4.5h-3v4.5A2.25 2.25 0 017.5 20.25H3.75A2.25 2.25 0 011.5 18V9.75z"
                            />
                        </svg>
                        <p className=" ml-6 mt-1 text-white hover:text-gray-600">Home | Page</p>
                    </Link>
                </div>
                <div className=' hover:bg-stone-300 rounded p-2'>
                    <Link to={'/dashboard'} onClick={handleLogOut} className=" rounded flex ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-10 h-10 text-gray-800 hover:text-indigo-500 transform hover:scale-110 transition duration-300 ease-in-out shadow-lg rounded-full p-2 hover:shadow-2xl"
                        >
                            <path d="M17 16l4-4-4-4" />
                            <path d="M3 12h14M7 6v12" />
                        </svg>
                        <p className=" ml-6 mt-1 text-white hover:text-gray-600"> <button>Logout</button></p>
                    </Link>
                </div>
            </div>
            <div className='col-span-2'></div>
            <div className="bg-blue-500 h-full col-span-6">
                <AddNewClients className='m-10'></AddNewClients>
            </div>
        </div>
    );
};

export default Dashboard;