import { Link } from 'react-router-dom'

import { ArrowRightIcon, ArrowLeftIcon, MapPinIcon, ChevronDownIcon, HomeModernIcon, MagnifyingGlassIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export default function Services() {
    return (
        <>
        <div className="page-wrapper">
            <section className='bg-linear-120 from-[#262626] to-40% to-gr08 mt-[100px] pt-[150px] pb-40 pl-[162px] pr-100 flex flex-col gap-20 relative border-b border-gr15'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Elevate Your Real Estate Experience</h3>
                    <p className='default-text text-gr60 w-[1366px]'>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
                </div>
            </section>
            <section className="w-full h-63 bg-gr10 flex flex-col justify-center relative">
                <div className="h-58 w-full outline outline-gr15 bg-gr08 flex align-center justify-between p-5 gap-5">
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/building.svg" alt="" />
                        <h6>Find Your Dream Home</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px] " />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/banknotes.svg" alt="" />
                        <h6>Unlock Property Value</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/offices.svg" alt="" />
                        <h6>Effortless Property Management</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/sun.svg" alt="" />
                        <h6>Smart Investments, Informed Decisions</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px]" />
                    </div>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px] w-7xl'>
                    <h3>Unlock Property Value</h3>
                    <p className='default-text text-gr60'>Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey</p>
                </div>
                <div className='grid grid-cols-3 gap-[30px]'>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] col-span-2 bg-[url(/bg-contacts-card.svg)] bg-gr10'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white'>Unlock the Value of Your Property Today</h4>
                            <Link
                            to={'/'}
                            className='link-gr !bg-gr08'>
                                Learn More
                            </Link>
                        </div>
                        <p className='default-text text-gr60'>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                    </article>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px] w-7xl'>
                    <h3>Effortless Property Management</h3>
                    <p className='default-text text-gr60'>Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you</p>
                </div>
                <div className='grid grid-cols-3 gap-[30px]'>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px]'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] col-span-2 bg-[url(/bg-contacts-card.svg)] bg-gr10'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-white'>Unlock the Value of Your Property Today</h4>
                            <Link
                            to={'/'}
                            className='link-gr !bg-gr08'>
                                Learn More
                            </Link>
                        </div>
                        <p className='default-text text-gr60'>Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                    </article>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex gap-15 relativestars-before-header'>
                <div className='flex flex-col gap-[50px] w-[45%]'>
                    <div className='flex flex-col gap-[14px]'>
                        <h3>Smart Investments, Informed Decisions</h3>
                        <p className='default-text text-gr60'>Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.</p>
                    </div>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] col-span-2 bg-[url(/bg-contacts-card.svg)] bg-gr10 bg-no-repeat bg-cover'>
                        <h5 className='text-white'>Unlock Your Investment Potential</h5>
                        <p className='default-text text-gr60'>Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                        <Link
                            to={'/'}
                            className='link-gr !bg-gr08 w-full text-center'>
                                Learn More
                        </Link>
                    </article>
                </div>
                <div className='grid grid-cols-2 p-[10px] gap-[10px] rounded-[20px] bg-gr10'>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] bg-gr08'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] bg-gr08'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] bg-gr08'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                    <article className='flex flex-col gap-[30px] p-[50px] border border-gr15 rounded-[12px] bg-gr08'>
                        <div className='flex gap-5 items-center'>
                            <img src="icons/valuation.svg" alt="" className='size-[82px]' />
                            <h5 className='text-white'>Valuation Mastery</h5>
                        </div>
                        <p className='default-text text-gr60'>Discover the true worth of your property with our expert valuation services.</p>
                    </article>
                </div>
            </section>
        </div>
        </>
    )
}