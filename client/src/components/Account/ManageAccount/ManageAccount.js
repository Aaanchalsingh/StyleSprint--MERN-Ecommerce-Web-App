import { useState, useEffect } from 'react';
import axios from 'axios';
import Account from '../Account';
import './ManageAccount.css';

const ManageAccount=() => {
    const [userData, setUserData]=useState({
        email: "",
        password: "",
        fullname: "",
        username: "",
    });

    useEffect(() => {
        const fetchUserData=async () => {
            try {
                const response=await axios.get('http://localhost:6969/userdata', {
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
            await axios.post('http://localhost:6969/updateuserdata', userData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('User data updated successfully');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    return (
        <Account>
            <div className="manage__account__container">
                <div className="edit__account__container">
                    <div className="edit__account">
                        <div className="edit__account__header">Edit account</div>
                        <div className="edit__account__form__container">
                            <div className="edit__account__form">
                                <div className="fname__input__container edit__input__container">
                                    <label className="fname__label input__label">First name</label>
                                    <input
                                        type="text"
                                        className="fname__input edit__account__input"
                                        name="fullname"
                                        value={userData.fullname}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="lname__input__container edit__input__container">
                                    <label className="lname__label input__label">User name</label>
                                    <input
                                        type="text"
                                        className="lname__input edit__account__input"
                                        name="username"
                                        value={userData.username}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="lname__input__container edit__input__container">
                                    <label className="lname__label input__label">Email</label>
                                    <input
                                        type="text"
                                        className="lname__input edit__account__input"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="save__changes__button__container">
                                    <button className="save__changes__button" onClick={handleSubmit}>Save Changes</button>
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
                            <button className="delete__account__button" >Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Account>
    );
}

export default ManageAccount;
