import React from 'react'
import { Link } from "react-router-dom";
import Container from "../components/Container";
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import BlogCard from '../components/BlogCard';
import Marquee from "react-fast-marquee";
import famous1 from "../images/famous-1.webp"
import famous2 from "../images/famous-2.webp"
import famous3 from "../images/famous-3.webp"
import famous4 from "../images/famous-4.webp"

const Home = () => {
  return (
    <>
      <Container  class1="home-wrapper-1 py-5">
        <div className='row'>
          <div className='col-6'>
            <div className='main-banner position-relative'>
              <img 
                src='images/main-banner-1.jpg'
                className='img-fluid rounded-3'
                alt='main banner'
              />
              <div className='main-banner-content position-absolute'>
                <h4>SUPERCHARED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>Form $999.0 or $41.62/mo.</p>
                <Link className="button"> Buy Now </Link>
              </div>
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
              <div className='small-banner position-relative'><img src='images/catbanner-01.jpg' className='img-fluid rounded-3' alt='main banner'/><div className='small-banner-content position-absolute'><h4>Best Sake</h4><h5>iPad S13+ Pro.</h5><p>From $999.0 <br/> or $41.62/mo.</p></div></div>
              <div className='small-banner position-relative'><img src='images/catbanner-02.jpg' className='img-fluid rounded-3' alt='main banner'/><div className='small-banner-content position-absolute'><h4>New Arrival</h4><h5>But IPad Air</h5><p>From $999.0 <br/> or $41.62/mo.</p></div></div>
              <div className='small-banner position-relative'><img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner'/><div className='small-banner-content position-absolute'><h4>Best Sake</h4><h5>But IPad Air</h5><p>From $999.0 <br/> or $41.62/mo.</p></div></div>
              <div className='small-banner position-relative'><img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner'/><div className='small-banner-content position-absolute'><h4>Best Sake</h4><h5>But IPad Air</h5><p>From $999.0 <br/> or $41.62/mo.</p></div></div>
            </div>
          </div>
        </div>
      </Container>
      <Container  class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
              <div><img src="images/service.png" alt='servie'/><div><h6>Free Shiping</h6><p className='mb-0'>From all orders over $5</p></div></div>
              <div><img src="images/service-02.png" alt='servie'/><div><h6>Daily Surprise Offers</h6><p className='mb-0'>Save upto 25% off</p></div></div>
              <div><img src="images/service-03.png" alt='servie'/><div><h6>Support 24/7</h6><p className='mb-0'>Shop with an export</p></div></div>
              <div><img src="images/service-04.png" alt='servie'/><div><h6>Affordable Prices</h6><p className='mb-0'>Get Factory Default Price</p></div></div>
              <div><img src="images/service-05.png" alt='servie'/><div><h6>Secure Payments</h6><p className='mb-0'>100% Protected Payment</p></div></div>
            </div>
          </div>
        </div>
      </Container>
      <Container  class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
              <div className='d-flex gap align-items-center'><div><h6>Music & Gaming</h6><p>10 items</p></div><img src='images/camera.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>Camera</h6><p>10 items</p></div><img src='images/camera.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>Smart Tv</h6><p>10 items</p></div><img src='images/tv.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>HeadPhone</h6><p>10 items</p></div><img src='images/headphone.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>Music & Gaming</h6><p>10 items</p></div><img src='images/camera.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>Music & Gaming</h6><p>10 items</p></div><img src='images/camera.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>Music & Gaming</h6><p>10 items</p></div><img src='images/camera.jpg' alt="camera"/></div>
              <div className='d-flex gap align-items-center'><div><h6>Music & Gaming</h6><p>10 items</p></div><img src='images/camera.jpg' alt="camera"/></div>
            </div>
          </div>
        </div>
      </Container>
      <Container  class1="featured-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container  class1="famous-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img 
                src ={famous1} 
                className='img-fluid' 
                alt="famous" 
              />
              <div className='famous-content position-absolute'>
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous2} className='img-fluid' alt="famous" />
              <div className='famous-content position-absolute'>
                <h5 className='text-black-50'>Big Screen</h5>
                <h6 className='text-black-50'>Smart Watch Series 7</h6>
                <p className='text-black-50'>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous3} className='img-fluid' alt="famous"/>
              <div className='famous-content position-absolute '>
                <h5 className='text-black-50'>Big Screen</h5>
                <h6 className='text-black-50'>Smart Watch Series 7</h6>
                <p className='text-black-50'>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className='col-3'>
            <div className='famous-card position-relative'>
              <img src={famous4} className='img-fluid' alt="famous"/>
              <div className='famous-content position-absolute'>
                <h5 className='text-black-50'>Big Screen</h5>
                <h6 className='text-black-50'>Smart Watch Series 7</h6>
                <p className='text-black-50'>From $399 or $16.62/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container  class1="special-wrapper home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>
              Special Products
            </h3>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </Container>
      <Container  class1="popular-wrapper home-wrapper-2 py-5">
      <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container  class1="merque-wrapper home-wrapper-2 py-5">
      <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container  class1="blog-wrapper home-wrapper-2 py-5">
      <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
