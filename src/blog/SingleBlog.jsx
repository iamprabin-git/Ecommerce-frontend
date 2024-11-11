import React, { useState } from 'react';
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PopularPost from '../shop/PopularPost';
import Tags from '../shop/Tags';

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    // console.log(id)
    const result = blog.filter((b) => b.id === Number(id));
    console.log(result[0])
    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />
            <div className='blog-section blog-single padding-tb section-bg'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className='col'>
                                            <div className='post-item style-2'>
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className='post-thumb'>
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>
                                                                <div className='post-content'>
                                                                    <h2>{item.title}</h2>
                                                                    <div className='meta-post'>
                                                                        <ul className='lab-ul'>
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i>
                                                                                        {val.text}
                                                                                    </li>
                                                                                ))
                                                                            }

                                                                        </ul>

                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minima repellendus sapiente tenetur odio necessitatibus est dignissimos ducimus, voluptatum ad nihil accusamus corrupti, modi ipsa! Quae assumenda provident placeat aspernatur facere culpa alias vel praesentium voluptas iusto laudantium exercitationem, harum saepe architecto odit enim qui libero dolorum aut eos ad ducimus? Ut cum sapiente accusantium nisi fuga, recusandae natus officia consequuntur, odio deleniti facilis nam temporibus nihil aspernatur excepturi facere reprehenderit, libero quos blanditiis minima! Ducimus ratione vero qui expedita quo repellendus velit. Atque, minima vitae. Nisi unde earum temporibus ut tempore assumenda possimus consequuntur saepe, quam officiis nam labore!
                                                                    </p>
                                                                    <blockquote>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos provident ipsum qui adipisci dolorum quod.</p>

                                                                        <cite>
                                                                            <a href="#">....Ram bahadur ale</a>
                                                                        </cite>
                                                                    </blockquote>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, mollitia? Dolore laudantium minima illum. Quo eum inventore ducimus ea quam veniam unde eos fugiat tenetur consequuntur, laboriosam minima explicabo tempore, veritatis totam odio, cum ipsam laudantium amet ipsum! Inventore voluptate nostrum repudiandae voluptas rem temporibus cupiditate, animi ratione! Illo asperiores vel iste tenetur odit magni earum quod cum et? Perferendis tempora assumenda totam quibusdam qui ad omnis quod odio voluptatem quia, numquam nihil deserunt. Reprehenderit dicta, repudiandae illo vel ipsum non beatae voluptatem suscipit quis officiis corrupti necessitatibus sequi numquam iusto pariatur voluptates autem assumenda ducimus commodi deleniti enim nemo error quasi fugit? Aliquam quae animi, pariatur aliquid libero reprehenderit nemo amet iusto quibusdam saepe recusandae, ex autem assumenda itaque expedita aperiam? Soluta temporibus alias rerum impedit debitis accusamus! Earum debitis optio quia magni iure molestiae possimus saepe laudantium ducimus, consectetur officiis similique totam praesentium aperiam, beatae porro nemo? Esse hic, pariatur necessitatibus voluptatem nihil reiciendis quidem quo animi tenetur. Nulla repellat impedit error architecto consectetur voluptatem enim! Fugiat quia modi ipsam nam. Nemo saepe, explicabo excepturi, temporibus rem quae minus ut ex quas quis eaque a velit est commodi porro fugiat perspiciatis unde vitae similique! Illo repellendus tempore tempora.</p>
                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt aperiam mollitia illo autem aliquid illum, recusandae laborum voluptatum perferendis quos ipsum quae, fugiat eaque officia debitis ipsa error temporibus voluptas distinctio dignissimos a delectus, dicta inventore. Ipsum sed dolorum fuga possimus velit aspernatur, eligendi ducimus quas odio vel voluptas magni?</p>

                                                                    <div className='video-thumb'>
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/PGuKjkdGrEI?si=tRBrah2SfjZ8b1xf" className='video-button popup' target="_blank">

                                                                            <i className='icofont-ui-play'></i></a>



                                                                    </div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt nissimos a delectus, dicta inventore. Ipsum sed dolorum fuga possimus velit aspernatur, eligendi ducimus quas odio vel voluptas magni?</p>
                                                                    <div className='tags-section'>
                                                                        <ul className='tags lab-ul'>
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className='lab-ul social-icons'>
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}><a href="#" className={val.className}>
                                                                                        <i className={val.iconName}></i>
                                                                                    </a></li>
                                                                                ))
                                                                            }

                                                                        </ul>

                                                                    </div>
                                                                </div>

                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className='navigations-part'>
                                                <div className='left'>
                                                    <a href="#" className='prev'>
                                                        <i className='icofont-double-left'></i>previous Blog
                                                    </a>

                                                    <a href="#" className='title'>
                                                        Evisculate parallel processes via technical soumd models
                                                    </a>
                                                </div>
                                                <div className='right'>
                                                    <a href="#" className='next'>Next Blog
                                                        <i className='icofont-double-right'></i>
                                                    </a>

                                                    <a href="#" className='title'>
                                                        Evisculate parallel processes via technical soumd models
                                                    </a>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </article>
                        </div>
                        {/* right side */}
                        <div className='col-lg-4 col-12'>
                            <aside className='ps-lg-4'>
                                <Tags />
                                <PopularPost />

                            </aside>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
