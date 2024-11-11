import React from 'react'
import PageHeader from '../components/PageHeader'
import GoogleMap from '../components/GoogleMap';

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
    "Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
    {
        imgUrl: "/src/assets/images/icon/01.png",
        imgAlt: "contact icon",
        title: "Office Address",
        desc: "Godawari Municipality-5, lalitpur",
    },
    {
        imgUrl: "/src/assets/images/icon/02.png",
        imgAlt: "contact icon",
        title: "Phone number",
        desc: "+9779765726294",
    },
    {
        imgUrl: "/src/assets/images/icon/03.png",
        imgAlt: "contact icon",
        title: "Send email",
        desc: "admin@tnmultipurpose.com.np",
    },
    {
        imgUrl: "/src/assets/images/icon/04.png",
        imgAlt: "contact icon",
        title: "Our website",
        desc: "www.tnmultipurpose.com.np",
    },
];

const Contact = () => {
    return (
        <div>
            <PageHeader title={"Get In Touch With Us"} curPage={"Contact Us"} />
            <div className='map-address-section padding-tb section-bg'>
                <div className='container'>
                    <div className="section-header text-center">
                        <span className='subtitle'>{subTitle}</span>
                        <h2 className='title'>{title}</h2>
                        <div className="section-wrapper">
                            <div className="row flex-row-reverse">
                                <div className='col-xl-4 col-lg-5 col-8'>
                                    <div className='contact-wrapper'>
                                        {
                                            contactList.map((val, i) => (
                                                <div key={i} className='contact-item'>
                                                    <div className="contact-thumb">
                                                        <img src={val.imgUrl} alt="" />
                                                    </div>
                                                    <div className='contact-content'>
                                                        <h6>{val.title}</h6>
                                                        <p >{val.desc}</p>

                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>
                                 {/* google map */}
                            <div className='col-xl-8 col-g-7 col-4'>
                                <GoogleMap/>

                            </div>

                            </div>
                           
                        </div>
                    </div>

                </div>

            </div>
            <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className='subtitle'>{conSubTitle}</span>
                        <h2 className='title'>{conTitle}</h2>

                    </div>
                    <div className='section-wrapper'>
                        <div className='contact-form'>
                            <div className='form-group'>
                                <input type="text" name='name' id='name' placeholder='Your Full name' />
                             </div>
                             <div className='form-group'>
                                <input type="email" name='email' id='email' placeholder='Your email' />
                             </div>
                             <div className='form-group'>
                                <input type="number" name='number' id='number' placeholder='Your contact numer' />
                             </div>
                             <div className='form-group'>
                                <input type="text" name='subject' id='subject' placeholder='Subject' />
                             </div>
                             <div className='form-group w-100'>
                                <textarea name="message" id="message" rows={6} placeholder='your message'></textarea>
                             </div>
                             <div className='form-group w-100 text-center'>
                                <button className='lab-btn'>
                                    <span>{btnText}</span>
                                </button>
                             </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
