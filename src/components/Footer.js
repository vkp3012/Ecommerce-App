import React from 'react'
import newsletter from '../images/newsletter.png';
import {BsLinkedin , BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const footer = () => {
    return (
        <>
            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-5'>
                            <div className='footer-top-data d-flex gap-30 align-items-center'>
                                <img  src= {newsletter} alt="newsletter"/>
                                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
                            </div>
                        </div>
                        <div className='col-7'></div>
                    </div>
                </div>
            </footer>

            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4 className = "text-white mb-4">Contact Us</h4>
                            <div>
                                <address className='text-white fs-6'>
                                    Hn : Churamanpur Post Bullanpur PAC <br /> Varanasi UP <br/>
                                    PinCode : 221108 
                                </address>
                                <a
                                    href='tel: +91 96142872'
                                    className='mt-3 d-block mb-1 text-white'
                                >
                                    +91 93725897398
                                </a>
                                <a 
                                    href='mailto : vivekece1116@gmail.com'
                                    className='mt-2 d-block mb-0 text-white'    
                                >
                                    vivekece1116@gmail.com
                                </a>
                                <div className='"social_icons f-flex align-items-center gap-30 mt-4'>
                                    <a  className='text-white m-2' href="#">
                                        <BsLinkedin className='fs-4' />
                                    </a>
                                    <a  className='text-white m-2' href="#">
                                        <BsInstagram className='fs-4'/>
                                    </a>
                                    <a  className='text-white m-2' href="#">
                                        <BsGithub className='fs-4' />
                                    </a>
                                    <a  className='text-white m-2' href="#">
                                        <BsYoutube className='fs-4' />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Information</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link to="" className='text-white py-2 mb-1'>Privacy Policy</Link>
                                <Link to="" className='text-white py-2 mb-1'>Refund Policy</Link>
                                <Link to="" className='text-white py-2 mb-1'>Shipping Policy</Link>
                                <Link to="" className='text-white py-2 mb-1'>Term & Conditions</Link>
                                <Link to="" className='text-white py-2 mb-1'>Blogs</Link>
                            </div>
                        </div>
                        <div className='col-3'>
                            <h4 className='text-white mb-4'>Account</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>About Us</Link>
                                <Link className='text-white py-2 mb-1'>Faq</Link>
                                <Link className='text-white py-2 mb-1'>Contact</Link>
                            </div>
                        </div>
                        <div className='col-2'>
                            <h4 className='text-white mb-4'>Quick Links</h4>
                            <div className='footer-link d-flex flex-column'>
                                <Link className='text-white py-2 mb-1'>Laptops</Link>
                                <Link className='text-white py-2 mb-1'>Headphone</Link>
                                <Link className='text-white py-2 mb-1'>Tablets</Link>
                                <Link className='text-white py-2 mb-1'>Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='py-4'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <p className="text-center mb-0 text-white">
                                &copy; 📆|| { new Date().getTime()} - { new Date().getFullYear()} ||  Powered by Developer's Corner
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default footer
