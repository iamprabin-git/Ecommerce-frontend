import React, { useState } from 'react';
import Ratting from '../components/Ratting';

const reviewtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];


const Review = () => {
    const [reviewShow, setReviewShow] = useState(true);

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Description</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
            </ul>
            {/* desc and review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) => (
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>

                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))

                        }
                    </ul>
                    {/* add review fielld */}
                    <div className='client-review'>
                        <div className='review-form'>
                            <div className='review-title'>
                                <h5>{reviewtitle}</h5>
                            </div>
                            <form action="action" className='row'>
                                <div className='col-md-4 col-12'>
                                    <input type="text" name='name' id='name' placeholder='Full name'/>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <input type="text" name='email' id='name' placeholder='Your Email'/>
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='rating'>
                                    <span className='me-2'>Your Rating</span>
                                    <Ratting/>
                                    </div>
                                </div>
                                <div className='col-md-12 col-12'>
                                    <textarea name="message" id="message"  rows={6} placeholder='write yout mesage'></textarea>

                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='default-button'>
                                    <span>Submit Review</span>
                                    </button>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
                {/* Description */}
                <div className='description'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis, dolorem ipsa, perspiciatis delectus quaerat dicta placeat tempora accusamus totam suscipit. Tempore provident excepturi cumque officia voluptatem repellat illo at, totam dolorem est minima, obcaecati molestias? Temporibus molestias maiores, atque fugit non pariatur veniam? Temporibus architecto dignissimos cupiditate id sequi quas accusamus quisquam sit cum totam eveniet nihil dolorum officia eaque delectus, facere minus nobis provident officiis, qui est! Amet asperiores et minima ratione accusantium perspiciatis libero labore recusandae! Veritatis beatae quod laboriosam labore distinctio similique iste exercitationem dolores iure minima, reprehenderit unde reiciendis, eaque vitae, corrupti corporis atque? Ad.</p>
                    <div className='post-item'>
                        <div className='post-thumb'>
                            <img src="/src/assets/images/shop/01.jpg" alt="" />

                        </div>
                    <div className='post-content'>
                        <ul className='lab-ul'>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, minima.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, minima.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, minima.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, minima.</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, minima.</li>

                        </ul>
                    </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Review
