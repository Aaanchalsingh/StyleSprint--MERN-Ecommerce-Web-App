import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Account from '../Account';
import { useNavigate } from 'react-router-dom';
import './ManageAccount.css';
import { CartItemsContext } from '../../../Context/CartItemsContext';

const ManageAccount=() => {
    const [location, setLocation]=useState(null);
    const navigate=useNavigate();
    const cartItems=useContext(CartItemsContext);
    const [userData, setUserData]=useState({
        email: "",
        password: "",
        fullname: "",
        username: "",
        userId: ""
    });

    useEffect(() => {
        const fetchUserData=async () => {
            try {
                const response=await axios.get('https://shop-backend-nine.vercel.app/userdata', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange=(e) => {
        const { name, value }=e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };
    const handleLocation=async (e) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude }=position.coords;
                    try {
                        const response=await fetch(
                            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
                        );
                        if (!response.ok) {
                            throw new Error('Failed to fetch address');
                        }
                        const data=await response.json();
                        console.log('Geocoding API Response:', data);
                        if (data.address) {
                            const city=data.address.city||data.address.town||data.address.village||data.address.hamlet||'Unknown';
                            const state=data.address.state||data.address.county||'Unknown';
                            setLocation(`${city}, ${state}`);
                        } else {
                            setLocation('Address not found');
                        }
                    } catch (error) {
                        console.error('Error fetching address:', error);
                        setLocation('Error fetching address');
                    }
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setLocation('Error getting location');
                }
            );
        } else {
            setLocation('Geolocation is not supported by this browser.');
        }
    };

    const handleSubmit=async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://shop-backend-nine.vercel.app/updateuserdata', userData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('User data updated successfully');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const handleDelete=async (e) => {
        const userId=userData._id;
        console.log(userId);
        try {
            await axios.delete(`https://shop-backend-nine.vercel.app/deleteuser/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            localStorage.removeItem("token");
            alert('User deleted successfully');
            navigate('/');
            window.location.reload();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <Account>
            <div className="manage__account__container">
                <div className="edit__account__container w-full">
                    <div className="edit__account ml-5">
                        <div className="edit__account__header mt-2">Edit account</div>
                        <div className='flex flex-wrap gap-5'>
                            <div className="fname__input__container edit__input__container flex">
                                <label className="fname__label input__label mr-6">First&nbsp;name</label>
                                <input
                                    type="text"
                                    className="fname__input edit__account__input"
                                    name="fullname"
                                    value={userData.fullname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="lname__input__container edit__input__container flex">
                                <label className="lname__label input__label mr-6">User&nbsp;name</label>
                                <input
                                    type="text"
                                    className="lname__input edit__account__input"
                                    name="username"
                                    value={userData.username}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="lname__input__container edit__input__container flex">
                                <label className="lname__label input__label ">Email</label>
                                <input
                                    type="text"
                                    className="lname__input edit__account__input ml-4"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="lname__input__container edit__input__container flex">
                                <label className="lname__label input__label ">Location</label>
                                <input
                                    type="text"
                                    className="lname__input edit__account__input ml-4"
                                    name="loc"
                                    value={location}
                                    onChange={handleChange}
                                />
                                <button className='btn btn-dark ml-4 w-auto' onClick={handleLocation}>
                                    See your Location
                                </button>

                            </div>
                            <div className="save__changes__button__container">
                                <button className="save__changes__button btn btn-dark btn-hover" onClick={handleSubmit}>Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='inYourCart mt-5'>
                    <h1 className='text-center text-4xl mt-5 mb-5 '> CART ITEMS</h1>
                    <div className='flex flex-wrap '>
                        {cartItems.items.map((item) =>
                            <div className='shadow carddd cursor-pointer '>
                                <img key={item._id} src={`https://shema-backend.vercel.app/public/${item.category}/${item.image[0].filename}`} className='accountimagecart' alt={item.name} />
                                <h2 className='text-center pb-5 text-purple-800 text-2xl '>{item.name}</h2>
                            </div>)}
                    </div>

                </div>
                <div className="separator__line"></div>
                <div className="delete_account__container">
                    <div className="delete__account">
                        <div className="delete__account__header">
                            Delete account
                        </div>
                        <div className="delete__account__prompt">Do you want to cancel subscription?</div>
                        <div className="delete__account__button__container">
                            <button className="delete__account__button" onClick={handleDelete}>Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Account>
    );
}

export default ManageAccount;
