import { Link, useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { Checkbox } from '@headlessui/react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

import { ArrowRightIcon, ArrowLeftIcon, MapPinIcon, ChevronDownIcon, HomeModernIcon, MagnifyingGlassIcon, PhoneIcon, EnvelopeIcon, BoltIcon, CheckIcon } from '@heroicons/react/24/solid'

const faq = [
    {question: 'How do I search for properties on Estatein?', description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'},
    {question: 'How do I search for properties on Estatein?2', description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'},
    {question: 'How do I search for properties on Estatein?3', description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'},
    {question: 'How do I search for properties on Estatein?4', description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'},
    {question: 'How do I search for properties on Estatein?5', description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'},
    {question: 'How do I search for properties on Estatein?6', description: 'Learn how to use our user-friendly search tools to find properties that match your criteria.'},
]

export default function Property() {
    const { id } = useParams();
    const [property, setProperty] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [formAgreeCheckbox, setFormAgreeCheckbox] = useState(false);

    useEffect(() => {
    fetch('http://localhost:5000/properties')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setProperty(found);
      })
      .catch((err) => console.error(err));
    }, [id]);

    if (!property) {
        return <p>Loading...</p>; // можно спиннер или skeleton{
    }

    return (
        <>
            <div className="page-wrapper">
                <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-50 flex flex-col gap-[30px] relative'>
                    <div className='bg-gr08 flex flex-col gap-[50px] relative'>
                        <div className='flex justify-between items-center'>
                            <article className='flex gap-5 items-center'>
                                <h4 className='text-white'>{property.name} {property.type}</h4>
                                <p className='flex border border-gr15 p-[10px] gap-[6px] rounded-[8px]'>
                                    <MapPinIcon className='size-6' />
                                    <span className='default-text'>{property.city}, {property.state}</span>
                                </p>
                            </article>
                            <div className='flex flex-col gap-[2px]'>
                                <p className='default-text text-gr60'>Price</p>
                                <h5>${property.price.toLocaleString()}</h5>
                            </div>
                        </div>
                        <div className='flex flex-col p-[50px] gap-[30px] bg-gr10 rounded-[12px] border border-gr15'>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                spaceBetween={20}
                                slidesPerView={9}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper bg-gr08 !p-5 border border-gr15 rounded-[12px]"
                            >
                                {property.images.map((path, idx) => (
                                    <SwiperSlide key={idx} className='!border-none !p-0'>
                                        <img src={`/${path}`} className='rounded-[8px] h-[94px] object-cover' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <Swiper
                                style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                                }}
                                spaceBetween={30}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.images-swiper-next',
                                    prevEl: '.images-swiper-prev',
                                }}
                                pagination={{
                                    el: '.images-pagination',
                                    type: 'bullets',
                                }}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs, Pagination]}
                                className="items-center"
                            >
                                {property.images.map((path, idx) => (
                                    <SwiperSlide key={idx} className='!border-none !p-0'>
                                        <img src={`/${path}`} className='rounded-[8px] h-[583px]' />
                                    </SwiperSlide>
                                ))}
                                <div className="flex justify-between items-center p-[10px] gap-[10px] bg-gr08 rounded-full w-max">
                                    <button className="images-swiper-prev swiper-button shrink-0"><ArrowLeftIcon /></button>
                                    <div className="images-pagination !text-gr60" />
                                    <button className="images-swiper-next swiper-button shrink-0"><ArrowRightIcon /></button>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                    <div className='flex justify-between gap-[30px]'>
                        <div className='flex flex-col border border-gr15 p-[50px] rounded-[12px] gap-[50px] w-full h-min'>
                            <article className='flex flex-col gap-[14px]'>
                                <h5>Description</h5>
                                <p className='default-text text-gr60'>
                                    {property.description}
                                </p>
                            </article>
                            <div className='grid grid-cols-3 pt-5 border-t gap-5 border-t-gr15 divide-x divide-gr15'>
                                <div className='flex flex-col gap-[10px]'>
                                    <p className='flex items-center gap-[6px] text-gr60 default-text'><img src="/icons/bedroom.svg" alt="" className='size-6' />Bedrooms</p>
                                    <h5 className='text-white'>{property.bedrooms < 10 ? '0' + property.bedrooms : property.bedrooms}</h5>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <p className='flex items-center gap-[6px] text-gr60 default-text'><img src="/icons/bathroom.svg" alt="" className='size-6' />Bathrooms</p>
                                    <h5 className='text-white'>{property.bathrooms < 10 ? '0' + property.bathrooms : property.bathrooms}</h5>
                                </div>
                                <div className='flex flex-col gap-[10px]'>
                                    <p className='flex items-center gap-[6px] text-gr60 default-text'><img src="/icons/area.svg" alt="" className='size-6' />Area</p>
                                    <h5 className='text-white'>{property.area.toLocaleString()} Square Feet</h5>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border border-gr15 p-[50px] rounded-[12px] gap-[50px] w-full h-min'>
                            <h5>Key Features and Amenities</h5>
                            <div className='flex flex-col gap-[30px]'>
                                {property.features.map((feature, idx) => (
                                    <p key={idx} className='flex items-center py-[18px] px-6 border-l border-l-pr60 gap-[10px] w-full bg-linear-to-r from-gr10 to-gr08 to-80%'><BoltIcon className='fill-white size-6' /><span className='default-text text-gr60'>{feature}</span></p>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-[114px] flex justify-between gap-25 relative stars-before-header'>
                    <div className='flex flex-col gap-[14px] w-[50%]'>
                        <h3>Inquire About {property.name} {property.type}</h3>
                        <p className='default-text text-gr60'>Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.</p>
                    </div>
                    <form action="" className='grid grid-cols-2 gap-[30px] p-25 border border-gr15 rounded-[12px] w-full'>
                        <div className='flex flex-col gap-4'>
                            <p className='default-text text-white'>First Name</p>
                            <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter First Name' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='default-text text-white'>Last Name</p>
                            <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter Last Name' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='default-text text-white'>Email</p>
                            <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter your Email' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='default-text text-white'>Phone</p>
                            <input type="text" className='default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter Phone Number' />
                        </div>
                        <div className='flex flex-col gap-4 col-span-2'>
                            <p className='default-text text-white'>Selected Property</p>
                            <p className='flex justify-between default-text text-wh90 px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none' placeholder='Enter Phone Number'>
                                <span>{property.name} {property.type}, {property.city}, {property.state}</span>
                                <MapPinIcon className='size-6' />
                            </p>
                        </div>
                        <div className='flex flex-col gap-4 col-span-2'>
                            <p className='default-text text-white'>Message</p>
                            <textarea className='border resize-none h-[170px] pt-5 pb-6 default-text border-gr15 focus:outline-none rounded-[8px] bg-gr10 px-5 py-6' placeholder='Enter your Message here..' />
                        </div>
                        <div className='flex justify-between col-span-2'>
                            <div className='flex items-center gap-[10px]'>
                                <Checkbox
                                checked={formAgreeCheckbox}
                                onChange={setFormAgreeCheckbox}
                                className='group p-1 size-7 focus:not-data-focus:outline-none data-focus:outline-none bg-gr10 border border-gr15 rounded-[4px]'
                                >
                                    <CheckIcon className='hidden group-data-checked:block' />
                                </Checkbox>
                                <p className='default-text text-gr60'>I agree with <Link className='cursor-pointer underline'>Terms of Use</Link> and <Link className='cursor-pointer underline'>Privacy Policy</Link></p>
                            </div>
                            <button type='submit' className='bg-pr60 px-[46px] py-[18px] rounded-[8px]'>Send Your Message</button>
                        </div>
                    </form>
                </section>
                <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-[114px] flex flex-col gap-20 relative stars-before-header'>
                    <div className='flex flex-col gap-[14px]'>
                        <h3>Comprehensive Pricing Details</h3>
                        <p className='default-text text-gr60'>At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision.</p>
                    </div>
                    <div className='relative flex items-center bg-gr10 border border-gr15 rounded-[12px] px-[50px] py-[30px] gap-[20px]'>
                        <h5 className='flex text-white'>Note</h5>
                        <div className='self-stretch w-[1px] bg-gr15'></div>
                        <p className='flex default-text text-gr60'>The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
                    </div>
                    <div className='flex gap-[50px]'>
                        <div>
                            <h6 className='text-gr60'>Listing Price</h6>
                            <p className='text-[40px] font-semibold'>${property.price.toLocaleString()}</p>
                        </div>
                        <div className='w-full flex flex-col gap-[50px]'>
                            <div className='flex flex-col p-[50px] border border-gr15 rounded-[12px] gap-10 divide-y divide-gr15'>
                                <div className='flex justify-between items-center pb-10'>
                                    <h5>Additional Fees</h5>
                                    <Link to="/" className='link-gr'>
                                        Learn More
                                    </Link>
                                </div>
                                <div className='grid grid-cols-2 gap-5 divide-x divide-gr15 pb-10'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Property Transfer Tax</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$25,000</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>Based on the sale price and local regulations</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Legal Fees</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$3,000</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>Approximate cost for legal services, including title transfer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5 divide-x divide-gr15 pb-10'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Home Inspection</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$500</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>Recommended for due diligence</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Property Insurance</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$1,200</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>Annual cost for comprehensive property insurance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='default-text text-gr60'>Mortgage Fees</p>
                                    <div className='flex gap-4 items-center'>
                                        <h5>Varies</h5>
                                        <p className='tag-pill text-gr60 bg-gr10'>If applicable, consult with your lender for specific details</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col p-[50px] border border-gr15 rounded-[12px] gap-10 divide-y divide-gr15'>
                                <div className='flex justify-between items-center pb-10'>
                                    <h5>Monthly Costs</h5>
                                    <Link to="/" className='link-gr'>
                                        Learn More
                                    </Link>
                                </div>
                                <div className='flex flex-col gap-4 pb-10'>
                                    <p className='default-text text-gr60'>Property Taxes</p>
                                    <div className='flex gap-4 items-center'>
                                        <h5>$1,250</h5>
                                        <p className='tag-pill text-gr60 bg-gr10'>Approximate monthly property tax based on the sale price and local rates</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='default-text text-gr60'>Homeowners' Association Fee</p>
                                    <div className='flex gap-4 items-center'>
                                        <h5>$300</h5>
                                        <p className='tag-pill text-gr60 bg-gr10'>Monthly fee for common area maintenance and security</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col p-[50px] border border-gr15 rounded-[12px] gap-10 divide-y divide-gr15'>
                                <div className='flex justify-between items-center pb-10'>
                                    <h5>Total Initial Costs</h5>
                                    <Link to="/" className='link-gr'>
                                        Learn More
                                    </Link>
                                </div>
                                <div className='grid grid-cols-2 gap-5 divide-x divide-gr15 pb-10'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Listing Price</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$1,250,000</h5>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Additional Fees</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$29,700</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>Property transfer tax, legal fees, inspection, insurance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5 divide-x divide-gr15 pb-10'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Down Payment</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$250,000</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>20%</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Mortgage Amount</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$1,000,000</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>If applicable</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div className='flex flex-col p-[50px] border border-gr15 rounded-[12px] gap-10 divide-y divide-gr15'>
                                <div className='flex justify-between items-center pb-10'>
                                    <h5>Monthly Expenses</h5>
                                    <Link to="/" className='link-gr'>
                                        Learn More
                                    </Link>
                                </div>
                                <div className='grid grid-cols-2 gap-5 divide-x divide-gr15 pb-10'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Property Taxes</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$1,250</h5>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Homeowners' Association Fee</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$300</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-5 divide-x divide-gr15 pb-10'>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Mortgage Payment</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>Varies based on terms and interest rate</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>If applicable</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p className='default-text text-gr60'>Property Insurance</p>
                                        <div className='flex gap-4 items-center'>
                                            <h5>$100</h5>
                                            <p className='tag-pill text-gr60 bg-gr10'>Approximate monthly cost</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                                <div className='flex justify-between gap-50'>
                                    <div className='flex flex-col gap-[14px]'>
                                        <h2>Frequently Asked Questions</h2>
                                        <p className='default-text text-gr60'>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                                    </div>
                                    <Link className='link-gr whitespace-nowrap h-min self-end'>
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
                                            className='!p-[50px] !g-[30px]'
                                        >
                                            <h5>{faq.question}</h5>
                                            <p className='default-text !-tracking-[0.6%] text-gr60'>{faq.description}</p>
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
        </>
    )
}