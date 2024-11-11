import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    // handle tab Change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId)
    }
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // direct to homepage
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm =() => {
        alert("Your Order is Paced Successfully")
        localStorage.removeItem("cart");
        navigate(from, {replace: true})
    }
    return (
        <div className='modalCard'>
            <Button variant="primary" className='py-2' onClick={handleShow}>Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                className='modal fade'
                centered>
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Select your Payment Method</h5>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className="tabs mt-3">
                                <ul className='nav nav-tabs' id='mytab' role='tablist'>
                                    <li className='nav-item' role='presentation'><a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                        id='visa-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='visa'
                                        aria-selected={activeTab === "visa"}
                                        onClick={() => handleTabChange("visa")}
                                        href="#visa"><img src="https://www.paymentscardsandmobile.com/wp-content/uploads/2021/11/visa-mastercard-logos.jpg" alt="" width="80" /></a></li>

                                    <li className='nav-item' role='presentation'><a className={`nav-link ${activeTab === "esewa" ? "active" : ""}`}
                                        id='esewa-tab'
                                        data-toggle="tab"
                                        role='tab'
                                        aria-controls='esewa'
                                        aria-selected={activeTab === "esewa"}
                                        onClick={() => handleTabChange("esewa")}
                                        href="#visa"><img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Esewa_logo.webp" alt="" width="80" /></a></li>
                                </ul>
                                {/* contents */}
                                <div className='tab-content' id='myTabContent'>
                                    {/* visa Content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* visa tab content */}
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Credit Card</h5>

                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span>Cardholder Name</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                    <span>Card Number</span> <i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                        <span>Card Expire Date</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                        <span>CVV</span>
                                                    </div>

                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>order Now</button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* paypal Content */}
                                    <div className={`tab-pane fade ${activeTab === "esewa" ? "show active" : ""}`}
                                        id='esewa'
                                        role='tabpanel'
                                        aria-labelledby='esewa-tab'>
                                            {/* esewa Content */}
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Esewa Details</h5>

                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type="text" name='name' id='name' className='form-control' required />
                                                    <span>Esewa Id</span>
                                                </div>
                                                <div className='inputbox'>
                                                    <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                    <span>AccountHolder Name</span> <i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                        <span>Extra Info</span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type="text" name='number' id='number' min="1" max="999" className='form-control' required />
                                                        <span></span>
                                                    </div>

                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Esewa</button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

{/* payment Desclaimer */}
<p className='mt-3 px-4 p-Disclaimer'>
    <em>
        Payment Desclaimer: In no event shall Payment or Partial payment by owner for any mateial or Service
    </em>
</p>

                            </div>
                        </div>

                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default CheckOutPage
