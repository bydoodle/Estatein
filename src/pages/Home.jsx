import { Link, useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon, ArrowLeftIcon, StarIcon } from '@heroicons/react/24/solid'
import { BuildingOfficeIcon } from '@heroicons/react/20/solid'

export default function Home() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [properties, setProperties] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [faq, setFaq] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/properties')
            .then((res) => res.json())
            .then((data) => setProperties(data))
            .catch((err) => console.error(err));

        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.error(err));

        fetch("http://localhost:5000/FAQ")
            .then((res) => res.json())
            .then((data) => setFaq(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="page-wrapper">
            <section className="w-full h-screen flex bg-gr08 2xl:pt-25 xl:pt-19 relative">
                <div className="w-full 2xl:pl-[162px] xl:pl-20 pr-20 flex flex-col justify-center gap-15 relative">
                    <header className="flex flex-col gap-6">
                        <h2>Discover Your Dream <br /> Property with Estatein</h2>
                        <p className="default-text text-gr60">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                    </header>
                    <div className="flex gap-5">
                        <button className="link-tr default-text">Learn More</button>
                        <button className="link-pr default-text">Browse Properties</button>
                    </div>
                    <div className="flex gap-5">
                        <div className="card-gr flex flex-col gap-[2px]">
                            <p className="large-text">200+</p>
                            <p className="default-text text-gr60">Happy Customers</p>
                        </div>
                        <div className="card-gr flex flex-col gap-[2px]">
                            <p className="large-text">10k+</p>
                            <p className="default-text text-gr60">Properties for clients</p>
                        </div>
                        <div className="card-gr flex flex-col gap-[2px]">
                            <p className="large-text">16+</p>
                            <p className="default-text text-gr60">Years of experience</p>
                        </div>
                    </div>
                    <div className="absolute left-[100%] -translate-x-[50%] bg-gr08 border border-gr15 top-40 2xl:size-[175px] xl:size-[129px] rounded-full flex items-center justify-center">
                        <div className="2xl:size-[80px] xl:size-[58px] rounded-full bg-gr10 border border-gr15 flex items-center justify-center">
                            <ArrowUpRightIcon className="text-white size-[50%]" />
                        </div>
                        <img src="/home-circle-text.png" alt="" className="absolute size-[85%]" />
                    </div>
                </div>
                <div className="w-full bg-gr10 bg-[url(/bg-home-header.svg)] bg-no-repeat bg-bottom-right bg-cover h-full">
                    <picture>
                        <img src="/Image.png" alt="" className="h-full w-full object-cover"/>
                    </picture>
                </div>
            </section>
            <section className="w-full 2xl:h-68 xl:h-49 bg-gr10 flex flex-col justify-center relative">
                <div className="w-full outline outline-gr15 bg-gr08 flex align-center justify-between 2xl:p-5 xl:p-[10px] 2xl:gap-5 xl:gap-[10px]">
                    <div className="card-big-gr flex flex-col items-center justify-center 2xl:gap-5 xl:gap-4 w-full relative">
                        <img src="/icons/building.svg" alt="" className='2xl:size-[82px] xl:size-[60px]' />
                        <h6>Find Your Dream Home</h6>
                        <ArrowUpRightIcon className="absolute 2xl:right-5 2xl:top-5 xl:right-4 xl:top-4 text-gr30 2xl:size-[34px] xl:size-[26px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center 2xl:gap-5 xl:gap-4 w-full relative">
                        <img src="/icons/banknotes.svg" alt="" className='2xl:size-[82px] xl:size-[60px]' />
                        <h6>Unlock Property Value</h6>
                        <ArrowUpRightIcon className="absolute 2xl:right-5 2xl:top-5 xl:right-4 xl:top-4 text-gr30 2xl:size-[34px] xl:size-[26px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center 2xl:gap-5 xl:gap-4 w-full relative">
                        <img src="/icons/offices.svg" alt="" className='2xl:size-[82px] xl:size-[60px]' />
                        <h6>Effortless Property Management</h6>
                        <ArrowUpRightIcon className="absolute 2xl:right-5 2xl:top-5 xl:right-4 xl:top-4 text-gr30 2xl:size-[34px] xl:size-[26px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center 2xl:gap-5 xl:gap-4 w-full relative">
                        <img src="/icons/sun.svg" alt="" className='2xl:size-[82px] xl:size-[60px]' />
                        <h6>Smart Investments, Informed Decisions</h6>
                        <ArrowUpRightIcon className="absolute 2xl:right-5 2xl:top-5 xl:right-4 xl:top-4 text-gr30 2xl:size-[34px] xl:size-[26px]" />
                    </div>
                </div>
            </section>
            <section className='bg-gr08 mx-4 xl:mx-20 2xl:mx-40 2xl:mt-40 xl:mt-30 2xl:gap-20 xl:gap-15 flex flex-col relative stars-before-header'>
                <div className='flex justify-between 2xl:gap-50 xl:gap-[150px]'>
                    <div className='flex flex-col gap-[14px]'>
                        <h3>Featured Properties</h3>
                        <p className='default-text text-gr60'>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                    </div>
                    <Link className='link-gr whitespace-nowrap h-min self-end default-text xl:!text-[14px]'>
                        View All Properties
                    </Link>
                </div>
                <Swiper
                    navigation={{
                        nextEl: '.properties-swiper-next',
                        prevEl: '.properties-swiper-prev',
                    }}
                    pagination={{
                        el: '.properties-pagination',
                        type: 'fraction',
                        formatFractionCurrent: number => number < 10 ? `0${number}` : number,
                        formatFractionTotal: number => number < 10 ? `0${number}` : number,
                        renderFraction: (currentClass, totalClass) =>
                        `<span class="${currentClass} text-white"></span> of <span class="${totalClass}"></span>`,
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={10}
                    breakpoints={{
                        1280: { spaceBetween: 20 }, // xl
                        1536: { spaceBetween: 30 }, // 2xl
                    }}
                    allowTouchMove={false}
                >
                    {properties.map((property) => (
                        <SwiperSlide
                            key={property.id}
                        >
                            <img src={property.images[0]} alt={property.name} className='2xl:h-[318px] xl:h-[255px] object-cover rounded-[10px]' />
                            <article className='flex flex-col gap-[6px]'>
                                <h5>{property.name}</h5>
                                <p className='default-text text-gr60'>
                                    {property.description.length > 92 ? (
                                    <>
                                        {property.description.substring(0, 92)}...{' '}
                                        <Link
                                            to={'/'}
                                            className='default-text text-white underline w-[240px]'
                                        >Read more
                                        </Link>
                                    </>
                                    ) : property.description}
                                </p>
                            </article>
                            <div className='flex flex-wrap gap-[10px] xl:my-1'>
                                <p className='tag-pill bg-gr10'><img src="/icons/bedroom.svg" alt="" className='size-5' />{property.bedrooms}-Bedroom</p>
                                <p className='tag-pill bg-gr10'><img src="/icons/bathroom.svg" alt="" className='size-5' />{property.bathrooms}-Bathroom</p>
                                <p className='tag-pill bg-gr10'><BuildingOfficeIcon className='size-5' />{property.type}</p>
                            </div>
                            <div className='flex gap-[50px] mt-auto'>
                                <div className='flex flex-col h-min gap-[2px] self-end'>
                                    <p className='default-text text-gr60'>Price</p>
                                    <h5>${property.price.toLocaleString()}</h5>
                                </div>
                                <Link
                                    to={'/'}
                                    className='link-pr default-text w-full'
                                >View Property Details
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="nav-wrapper flex justify-between">
                        <div className="properties-pagination !text-gr60" />
                        <div className='flex justify-between gap-[10px]'>
                            <button className="properties-swiper-prev swiper-button"><ArrowLeftIcon /></button>
                            <button className="properties-swiper-next swiper-button"><ArrowRightIcon /></button>
                        </div>
                    </div>
                </Swiper>
            </section>
            <section className='bg-gr08 mx-4 xl:mx-20 2xl:mx-40 2xl:mt-40 xl:mt-30 2xl:gap-20 xl:gap-15 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex justify-between 2xl:gap-50 xl:gap-[150px]'>
                    <div className='flex flex-col gap-[14px]'>
                        <h3>What Our Clients Say</h3>
                        <p className='default-text text-gr60'>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    </div>
                    <Link className='link-gr whitespace-nowrap h-min self-end default-text xl:!text-[14px]'>
                        View All Testimonials
                    </Link>
                </div>
                <Swiper
                    navigation={{
                        nextEl: '.reviews-swiper-next',
                        prevEl: '.reviews-swiper-prev',
                    }}
                    pagination={{
                        el: '.reviews-pagination',
                        type: 'fraction',
                        formatFractionCurrent: number => number < 10 ? `0${number}` : number,
                        formatFractionTotal: number => number < 10 ? `0${number}` : number,
                        renderFraction: (currentClass, totalClass) =>
                        `<span class="${currentClass} text-white"></span> of <span class="${totalClass}"></span>`,
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={30}
                    allowTouchMove={false}
                >
                    {reviews.map((review) => (
                        <SwiperSlide
                            key={review.id}
                            className='2xl:!p-[50px] xl:!p-10 2xl:!gap-10 xl:!gap-[30px]'
                        >
                            <div className='flex 2xl:gap-[10px] xl:gap-2'>
                                {[...Array(review.rating)].map((_, index) => (
                                    <div key={index} className='star-bg'>
                                        <StarIcon/>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-[14px]">
                                <h5>{review.title}</h5>
                                <p className='default-text h-[108px]'>{review.description}</p>
                            </div>
                            <div className='flex 2xl:gap-3 xl:gap-[10px]'>
                                <img src={review.user_photo} alt="" className='2xl:size-15 xl:size-[50px]' />
                                <div className='flex flex-col gap-[2px]'>
                                    <h6 className='xl:!text-lg'>{review.user_name}</h6>
                                    <p className='default-text text-gr60'>{review.user_location}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="nav-wrapper flex justify-between">
                        <div className="reviews-pagination !text-gr60" />
                        <div className='flex justify-between gap-[10px]'>
                            <button className="reviews-swiper-prev swiper-button"><ArrowLeftIcon /></button>
                            <button className="reviews-swiper-next swiper-button"><ArrowRightIcon /></button>
                        </div>
                    </div>
                </Swiper>
            </section>
            <section className='bg-gr08 mx-4 xl:mx-20 2xl:mx-40 2xl:mt-40 xl:mt-30 2xl:gap-20 xl:gap-15 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex justify-between 2xl:gap-50 xl:gap-[150px]'>
                    <div className='flex flex-col gap-[14px]'>
                        <h3>Frequently Asked Questions</h3>
                        <p className='default-text text-gr60'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                    </div>
                    <Link className='link-gr whitespace-nowrap h-min self-end default-text xl:!text-[14px]'>
                        View All FAQ’s
                    </Link>
                </div>
                <Swiper
                    navigation={{
                        nextEl: '.faq-swiper-next',
                        prevEl: '.faq-swiper-prev',
                    }}
                    pagination={{
                        el: '.faq-pagination',
                        type: 'fraction',
                        formatFractionCurrent: number => number < 10 ? `0${number}` : number,
                        formatFractionTotal: number => number < 10 ? `0${number}` : number,
                        renderFraction: (currentClass, totalClass) =>
                        `<span class="${currentClass} text-white"></span> of <span class="${totalClass}"></span>`,
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={30}
                    allowTouchMove={false}
                >
                    {faq.map((faq) => (
                        <SwiperSlide
                            key={faq.question}
                            className='2xl:!p-[50px] xl:!p-10 2xl:!gap-[30px] xl:!gap-6'
                        >
                            <h5 className='h-[72px]'>{faq.question}</h5>
                            <p className='default-text !-tracking-[0.6%] text-gr60 h-[54px]'>{faq.description}</p>
                            <Link to={'/'} className='default-text !-tracking-[0.6%] link-gr w-fit'>Read More</Link>
                        </SwiperSlide>
                    ))}
                    <div className="nav-wrapper flex justify-between">
                        <div className="faq-pagination !text-gr60" />
                        <div className='flex justify-between gap-[10px]'>
                            <button className="faq-swiper-prev swiper-button"><ArrowLeftIcon /></button>
                            <button className="faq-swiper-next swiper-button"><ArrowRightIcon /></button>
                        </div>
                    </div>
                </Swiper>
            </section>
        </div>
    )
}