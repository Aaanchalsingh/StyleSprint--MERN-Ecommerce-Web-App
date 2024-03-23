import React from 'react';
import logo from "./1.png";
import "./Landing.css";

function Landing() {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='head1 border p-4 border-gray-400 ml-6'>
                    <h1 className='text-8xl mb-6 relative'>
                        Daily Fabulous <span className="yellow-stroke">Styles for you</span>
                    </h1>
                    <p className="text-2xl mb-6 text-slate-500">Ready to impress with our fabulous style collection</p>
                    <div className="flex">
                        <button className="btn btn-dark mr-4">Shop Now</button>
                        <button className="btn btn-light">Learn More</button>
                    </div >
                    <div className="flex mt-2">
                        <div className="bg-pink-600 rounded mr-4" style={{ height: "10vh", width: "20vw" }}></div>
                        <div className="bg-yellow-600 rounded" style={{ height: "10vh", width: "20vw" }}></div>
                    </div>
                </div>
                <img src={logo} alt="" style={{ height: "80vh", width: "auto" }} />
            </div>
        </div>
    );
}

export default Landing;
