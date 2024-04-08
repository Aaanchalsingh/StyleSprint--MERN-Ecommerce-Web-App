import React from 'react';
import logo from "./1.png";
import l1 from "./2.png";
import l2 from "./3.png";
import "./Landing.css";
import { Link } from 'react-router-dom';

function Landing() {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='head1 pt-4 md:p-4 border-gray-400 ml-6 md:ml-12'>
                    <h1 className=' text-5xl md:text-8xl mb-5 relative'>
                        Daily Fabulous <span className="yellow-stroke">Styles for you</span>
                    </h1>
                    <p className="text-xl mb-3 text-slate-500">Ready to impress with our fabulous style collection</p>
                    <div className="flex mb-6 but">
                        <Link className="btn md:pl-6 md:pr-6  md:mr-4 btn-hover color-1 text-3xl " to="/shop">Shop Now</Link>
                        <a className="btn btn-light  btn-hover color-10 text-3xl " href ="#next">Learn More</a>
                    </div >
                    <div className="photo flex mt-4">
                        <div >
                            <img className="md:mr-4 " src={l1} alt="" />
                            <div className='flex justify-between'>
                                <p className='mt-2 md:ml-4 text-blue-400 '>Sweater</p>
                                <p className='mt-2 text-green-600 md:mr-5'>$95.00</p>
                            </div>

                        </div>
                        <div>
                            <img className="" src={l2} alt="" />
                            <div className='flex justify-between'>
                                <p className='mt-2 ml-4 text-pink-400 '>Jacket</p>
                                <p className='mt-2 mr-4 text-green-600 '>$55.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={logo} className="imghero" alt="" style={{ height: "80vh", width: "auto" }} />
            </div>
        </div>
    );
}

export default Landing;
