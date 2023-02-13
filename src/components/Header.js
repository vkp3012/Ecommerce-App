import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";

const Header = () => {
    return (
        <>
            <header className='header-top-strip py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className='col-6'>
                            <p className='text-end text-white mb-0'>
                                Hotline :
                                <a className='text-white' href='tel: +91 32748927386' >
                                    +91 32748927386
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <header className='header-upper py-3'>
                <div className='container-xxl'>
                    <div className='row align-items-center'>
                        <div className='col-2'>
                            <h2>
                                <Link className="text-white">Product</Link>
                            </h2>
                        </div>
                        <div className='col-5'>
                            <div class="input-group">
                                <input 
                                    type="text" 
                                    class="form-control py-2" 
                                    placeholder="Search Here..." 
                                    aria-label="Search Here..."
                                    aria-describedby="basic-addon2" 
                                />
                                <span 
                                    class="input-group-text p-3" 
                                    id="basic-addon2"
                                >
                                        <BsSearch className='fs-6'/>
                                </span>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='header-upper-links d-flex align-items-center justify-content-between'>
                                <div>
                                    <Link
                                        to = "/compare-product"
                                        className='d-flex align-items-center gap-10 text-white'
                                    >
                                        <img src = {compare} alt = "compare" />
                                        <p className='mb-0'>
                                            Compare <br /> Product
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to = "/wishlist"
                                        className='d-flex align-items-center gap-10 text-white'
                                    >
                                        <img src = {wishlist} alt = "compare" />
                                        <p className='mb-0'>
                                            Favourite <br /> wishlist
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to = "/login"
                                        className='d-flex align-items-center gap-10 text-white'
                                    >
                                        <img src = {user} alt = "compare" />
                                        <p className='mb-0'>
                                            Login <br />   My Account
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                        to = ""
                                        className='d-flex align-items-center gap-10 text-white'
                                    >
                                        <img src = {cart} alt = "compare" />
                                        <div className='d-flex flex-column gap-10'>
                                            <span className='badge bg-white text-dark'>0</span>
                                            <p className='mb-0'>$ 500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <header className="header-bottom py-3">
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='menu-bottom d-flex align-item-center gap-30'>
                                <div>   
                                    <div class="dropdown">
                                        <button 
                                            class="btn btn-secondary dropdown-toggle" 
                                            type="button" 
                                            id="dropdownMenuButton1" 
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                        >
                                            <img src={menu} alt = " " />
                                            <span className='me-5 d-inline-block'>
                                                Shop Categories
                                            </span>
                                            
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link class="dropdown-item text-white" to="">Action</Link></li>
                                            <li><Link class="dropdown-item text-white" to="">Another action</Link></li>
                                            <li><Link class="dropdown-item text-white" to="">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links py-2'>
                                    <div className='d-flex align-items-center gap-15'>
                                        <NavLink to="" className="text-white">Home</NavLink>
                                        <NavLink to="/ourstore" className="text-white">Our Store</NavLink>
                                        <NavLink to="/blogs" className="text-white">Blogs</NavLink>
                                        <NavLink to="/contact" className="text-white">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
