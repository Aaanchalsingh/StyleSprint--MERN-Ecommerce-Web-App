import { useState, useEffect } from 'react';
import axios from 'axios';
import Account from '../Account';
import { useNavigate } from 'react-router-dom';
import './ManageAccount.css';

const ManageAccount=() => {
    const navigate=useNavigate();
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
                const response=await axios.get('https://style-sprint-mern-ecommerce-web-app.vercel.app/userdata', {
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

    const handleSubmit=async (e) => {
        e.preventDefault();
        try {
            await axios.post('/updateuserdata', userData, {
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
            await axios.delete(`/deleteuser/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            alert('User deleted successfully');
            navigate('/');
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <Account>
            <div className="manage__account__container">
                <div className="edit__account__container ">
                    <div className="edit__account ml-5">
                        <div className="edit__account__header mt-2">Edit account</div>
                        <div className=" edit__account__form__container ">
                            <div className="edit__account__form flex flex-col flex-wrap justify-evenly">
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
                                    <label className="lname__label input__label ml-5 ">Email</label>
                                    <input
                                        type="text"
                                        className="lname__input edit__account__input ml-4"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="save__changes__button__container">
                                    <button className="save__changes__button btn btn-dark btn-hover ml-[40%]" onClick={handleSubmit}>Save Changes</button>
                                </div>
                            </div>
                        </div>
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
