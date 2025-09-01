import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation } from 'swiper/modules';

import { BoltIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { StarIcon, AcademicCapIcon, UserGroupIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid'

const team = [
    {
        id: 1,
        name: "Max Mitchell",
        role: "Founder",
        link: "https://x.com/",
        img: "/images/workers/worker.png"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        role: "Chief Real Estate Officer",
        link: "https://x.com/",
        img: "/images/workers/worker1.png"
    },
    {
        id: 3,
        name: "David Brown",
        role: "Head of Property Management",
        link: "https://x.com/",
        img: "/images/workers/worker2.png"
    },
    {
        id: 4,
        name: "Michael Turner",
        role: "Legal Counsel",
        link: "https://x.com/",
        img: "/images/workers/worker3.png"
    }
]

export default function About() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/clients')
            .then((res) => res.json())
            .then((data) => setClients(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
        <div className="page-wrapper">
            <section className="bg-gr08 mx-4 md:mx-20 lg:mx-40 pt-50 flex justify-between gap-20 items-center relative">
                <div className="flex flex-col gap-20">
                    <article className="flex flex-col gap-[14px]">
                        <h3 className="relative stars-before-header">Our Journey</h3>
                        <p className="default-text text-gr60">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                    </article>
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
                </div>
                <img src="/about-header-img.png" alt="" className="bg-[url('/about-header-bg.svg')] rounded-[12px] border border-gr30 bg-no-repeat bg-contain" />
            </section>
            <section className="bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex justify-between gap-20 items-center relative">
                <article className="flex flex-col gap-[14px] w-4xl">
                    <h3 className="relative stars-before-header">Our Values</h3>
                    <p className="default-text text-gr60">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </article>
                <div className="p-15 grid grid-rows-2 rounded-[12px] border border-gr15 outline-8 outline-gr10 divide-y divide-gr15 w-full">
                    <div className="grid grid-cols-2 divide-x divide-gr15">
                        <div className="flex flex-col gap-5 pr-[30px] mb-[30px]">
                            <div className="flex gap-[14px] items-center">
                                <StarIcon className='size-[74px] p-5 rounded-full border border-pr60 text-pr75' />
                                <h5>Trust</h5>
                            </div>
                            <p className="default-text text-gr60">Trust is the cornerstone of every successful real estate transaction.</p>
                        </div>
                        <div className="flex flex-col gap-5 pl-[30px] mb-[30px]">
                            <div className="flex gap-[14px] items-center">
                                <AcademicCapIcon className='size-[74px] p-5 rounded-full border border-pr60 text-pr75' />
                                <h5>Excellence</h5>
                            </div>
                            <p className="default-text text-gr60">We set the bar high for ourselves. From the properties we list to the services we provide.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gr15">
                        <div className="flex flex-col gap-5 pr-[30px] mt-[30px]">
                            <div className="flex gap-[14px] items-center">
                                <UserGroupIcon className='size-[74px] p-5 rounded-full border border-pr60 text-pr75' />
                                <h5>Client-Centric</h5>
                            </div>
                            <p className="default-text text-gr60">Your dreams and needs are at the center of our universe. We listen, understand.</p>
                        </div>
                        <div className="flex flex-col gap-5 pl-[30px] mt-[30px]">
                            <div className="flex gap-[14px] items-center">
                                <StarIcon className='size-[74px] p-5 rounded-full border border-pr60 text-pr75' />
                                <h5>Our Commitment</h5>
                            </div>
                            <p className="default-text text-gr60">We are dedicated to providing you with the highest level of service, professionalism, and support.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Our Achievements</h3>
                    <p className='default-text text-gr60 w-7xl'>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='flex flex-col p-[50px] gap-[30px] rounded-[12px] border border-gr15 outline-8 outline-gr10'>
                        <h4>3+ Years of Excellence</h4>
                        <p className='default-text text-gr60'>
                            With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.
                        </p>
                    </div>
                    <div className='flex flex-col p-[50px] gap-[30px] rounded-[12px] border border-gr15 outline-8 outline-gr10'>
                        <h4>Happy Clients</h4>
                        <p className='default-text text-gr60'>
                            Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.
                        </p>
                    </div>
                    <div className='flex flex-col p-[50px] gap-[30px] rounded-[12px] border border-gr15 outline-8 outline-gr10'>
                        <h4>Industry Recognition</h4>
                        <p className='default-text text-gr60'>
                            We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Navigating the Estatein Experience</h3>
                    <p className='default-text text-gr60 w-[1366px]'>At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
                </div>
                <div className='grid grid-cols-3 grid-rows-2 gap-10'>
                    <div className='flex flex-col'>
                        <h6 className='border-l border-l-pr60 px-5 py-4'>Step 01</h6>
                        <div className='relative flex flex-col flex-grow p-[50px] gap-5 rounded-[12px] rounded-tl-none outline outline-gr15 bg-linear-135 from-[#271C44] to-15% to-gr08 gradient-cards-bg'>
                            <h5 className='text-[26px]'>Discover a World of Possibilities</h5>
                            <p className='default-text text-gr60'>Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='border-l border-l-pr60 px-5 py-4'>Step 02</h6>
                        <div className='relative flex flex-col flex-grow p-[50px] gap-5 rounded-[12px] rounded-tl-none outline outline-gr15 bg-linear-135 from-[#271C44] to-15% to-gr08 gradient-cards-bg'>
                            <h5 className='text-[26px]'>Narrowing Down Your Choices</h5>
                            <p className='default-text text-gr60'>Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='border-l border-l-pr60 px-5 py-4'>Step 03</h6>
                        <div className='relative flex flex-col flex-grow p-[50px] gap-5 rounded-[12px] rounded-tl-none outline outline-gr15 bg-linear-135 from-[#271C44] to-15% to-gr08 gradient-cards-bg'>
                            <h5 className='text-[26px]'>Personalized</h5>
                            <p className='default-text text-gr60'>Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='border-l border-l-pr60 px-5 py-4'>Step 04</h6>
                        <div className='relative flex flex-col flex-grow p-[50px] gap-5 rounded-[12px] rounded-tl-none outline outline-gr15 bg-linear-135 from-[#271C44] to-15% to-gr08 gradient-cards-bg'>
                            <h5 className='text-[26px]'>See It for Yourself</h5>
                            <p className='default-text text-gr60'>Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='border-l border-l-pr60 px-5 py-4'>Step 05</h6>
                        <div className='relative flex flex-col flex-grow p-[50px] gap-5 rounded-[12px] rounded-tl-none outline outline-gr15 bg-linear-135 from-[#271C44] to-15% to-gr08 gradient-cards-bg'>
                            <h5 className='text-[26px]'>Making Informed Decisions</h5>
                            <p className='default-text text-gr60'>Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.</p>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <h6 className='border-l border-l-pr60 px-5 py-4'>Step 06</h6>
                        <div className='relative flex flex-col flex-grow p-[50px] gap-5 rounded-[12px] rounded-tl-none outline outline-gr15 bg-linear-135 from-[#271C44] to-15% to-gr08 gradient-cards-bg'>
                            <h5 className='text-[26px]'>Getting the Best Deal</h5>
                            <p className='default-text text-gr60'>We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Meet the Estatein Team</h3>
                    <p className='default-text text-gr60 w-[1366px]'>At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
                </div>
                <div className='grid grid-cols-4 gap-[30px]'>
                    {team.map(member => (
                        <div
                        key={member.id}
                        className='flex flex-col gap-[50px] p-[30px] rounded-[12px] border border-gr15'>
                            <div className='relative flex justify-center'>
                                <img src={member.img} alt="" className='rounded-[12px] w-full' />
                                <a href={member.link} rel="noopener noreferrer" target='_blank' className='absolute w-[76px] h-[52px] px-[26px] py-[14px] bottom-0 translate-y-[50%] left-[50%] -translate-x-[50%] rounded-full bg-pr60'><img src="/icons/twitter.svg" alt="" /></a>
                            </div>
                            <div className='flex flex-col gap-6'>
                                <article className='flex flex-col items-center gap-[6px]'>
                                    <h5>{member.name}</h5>
                                    <p className='default-text text-gr60'>{member.role}</p>
                                </article>
                                <div className='flex p-[14px] pl-[24px] justify-between items-center rounded-full bg-gr10 border border-gr15'>
                                    <input type="text" placeholder='Say Hello 👋' className='placeholder-white focus:outline-none focus:ring-0 focus:border-transparent'/>
                                    <button className='size-[44px] p-[10px] rounded-full bg-pr60'><img src="icons/send.svg" alt="" /></button>
                                </div>
                            </div> 
                        </div>
                    ))}
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Our Valued Clients</h3>
                    <p className='default-text text-gr60 w-[1366px]'>At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving</p>
                </div>
                    <Swiper
                    className='!pt-[9px] !px-[9px]'
                    navigation={{
                        nextEl: '.clients-swiper-next',
                        prevEl: '.clients-swiper-prev',
                    }}
                    pagination={{
                        el: '.clients-pagination',
                        type: 'fraction',
                        formatFractionCurrent: number => number < 10 ? `0${number}` : number,
                        formatFractionTotal: number => number < 10 ? `0${number}` : number,
                        renderFraction: (currentClass, totalClass) =>
                        `<span class="${currentClass} text-white"></span> of <span class="${totalClass}"></span>`,
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    spaceBetween={50}
                    allowTouchMove={false}
                >
                    {clients.map((client, id) => (
                        <SwiperSlide
                            key={client.name + id}
                            className=' !p-[50px] !gap-10 outline-8 outline-gr10'
                        >
                            <div className='flex justify-between gap-[30px] items-center'>
                                <div className='flex flex-col gap-[6px]'>
                                    <p className='default-text text-gr60'>Since {client.year}</p>
                                    <h4>{client.name}</h4>
                                </div>
                                <a href={client.website} target='_blank' className='h-[63px] px-6 py-[18px] default-text rounded-[10px] bg-gr10 border border-gr15'>Visit Website</a>
                            </div>
                            <div className='grid grid-cols-2 divide-x divide-gr15'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex items-center gap-[6px] text-gr60'>
                                        <Squares2X2Icon className='size-6' />
                                        <p className='default-text'>Domain</p>
                                    </div>
                                    <h6>{client.domain}</h6>
                                </div>
                                <div className='flex flex-col gap-2 ml-[30px]'>
                                    <div className='flex items-center gap-[6px] text-gr60'>
                                        <BoltIcon className='size-6' />
                                        <p className='default-text'>Category</p>
                                    </div>
                                    <h6>{client.category}</h6>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[14px] p-[30px] rounded-[12px] border border-gr15'>
                                <p className='default-text text-gr60'>What They Said 🤗</p>
                                <p className='default-text h-[54px]'>{client.review}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="nav-wrapper flex justify-between">
                        <div className="clients-pagination !text-gr60" />
                        <div className='flex justify-between gap-[10px]'>
                            <button className="clients-swiper-prev swiper-button"><ArrowLeftIcon /></button>
                            <button className="clients-swiper-next swiper-button"><ArrowRightIcon /></button>
                        </div>
                    </div>
                </Swiper>
            </section>
        </div>
        </>
    )
}