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
              src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6986.771103663534!2d76.99275607711007!3d28.886888929272477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da5e51463d4c9%3A0xe5a485e2ac7c3d4a!2sMandaura%2C%20Haryana%20131103!5e0!3m2!1sen!2sin!4v1669909087902!5m2!1sen!2sin"
              height = "450"
              width= "600"
              className='border-0 w-100'
              allowFullScreen = ""
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
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
