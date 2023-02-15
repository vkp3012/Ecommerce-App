/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Meta from "../components/Meta"
import BreadCrumb from "../components/BreadCrumb"
import Container from "../components/Container";
import { AiOutlineHome , AiOutlineMail } from "react-icons/ai"
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
const Contact = () => {
  return (
    <>
      <Meta title = {"Contact Us "}/>
      <BreadCrumb title= " Contect Us"/>
      <Container class1="contect-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='row-12'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14428.343966240212!2d82.93917022316772!3d25.301314791563605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x398e3283c408381f%3A0x21232b7663c2bd03!2sLohta%20Bazar%2C%20Varanasi%2C%20Uttar%20Pradesh%20221107!3m2!1d25.300579!2d82.94381969999999!5e0!3m2!1sen!2sin!4v1676351067074!5m2!1sen!2sin" 
              width="600" 
              height="450" 
              className='border-0 w-100'
              allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              alt = "map"
            >
            </iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contect-inner-wrapper d-flex justify-content-between'>
              <div>
                <h3 className='contect-title mb-4'>Contect</h3>
                <form action='' className='d-flex flex-column gap-15'>
                  <div>
                    <input 
                      type = "text"
                      className='form-control'
                      placeholder='Name'
                    />
                  </div>
                  <div>
                    <input 
                      type = "email"
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input  
                      type = "email"
                      className='form-control'
                      placeholder='Email'
                    />
                  </div>
                  <div>
                    <input  
                      type = "tel"
                      className='form-control'
                      placeholder='Mobile Number'
                    />
                  </div>
                  <div>
                    <textarea
                      name=''
                      id = ""
                      className='w-100 form-control'
                      cols= "30"
                      rows= "4"
                      placeholder='Comments'
                    ></textarea>
                  </div>
                  <div>
                    <button className='button border-0'>Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contect-title mb-4'>Get in Touch With us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='mb-3 d-flex gap-15 align-content-center'>
                      <AiOutlineHome className='fs-5'/>
                      <address>
                        Hn : Churamanpur Post Bhullanpr PAC Varanasi UP
                      </address>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-content-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href='tel: +91 932479873' alt="tel">
                        +91 932479873
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-content-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href='mailto : vivekece1116@hmail.com' alt="mail">
                        vivekece1116@hmail.com
                      </a>
                    </li>
                    <li className='mb-3 d-flex gap-15 align-content-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Contact
