import { Link } from 'react-router-dom'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Checkbox } from '@headlessui/react'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { ArrowRightIcon, ArrowLeftIcon, MapPinIcon, ChevronDownIcon, HomeModernIcon, MagnifyingGlassIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { CheckIcon, BuildingOfficeIcon } from '@heroicons/react/20/solid'

export default function Contact() {
    const [selectedInquiryType, setSelectedInquiryType] = useState(null);
    const [selectedHearAbout, setSelectedHearAbout] = useState(null);

    const inquiryTypes = [
        'Buy',
        'Rent',
        'Sell',
        'Other'
    ];

    const hearAboutOptions = [
        'Search engine (Google, Bing, etc.)',
        'Social media (Facebook, Instagram, TikTok, etc.)',
        'Online advertisement',
        'Friend / Family referral',
        'Real estate portal (Zillow, Realtor, etc.)',
        'Newsletter / Email',
        'Event / Open house',
        'Other'
    ]

    const [formAgreeCheckbox, setFormAgreeCheckbox] = useState(false);

    return (
        <>
        <div className="page-wrapper">
            <section className='bg-linear-120 from-[#262626] to-40% to-gr08 mt-[100px] pt-[150px] pb-40 pl-[162px] pr-100 flex flex-col gap-20 relative border-b border-gr15'>
                <div className='flex flex-col gap-[14px]'>
                    <h3>Get in Touch with Estatein</h3>
                    <p className='default-text text-gr60 w-[1366px]'>Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.</p>
                </div>
            </section>
            <section className="w-full h-63 bg-gr10 flex flex-col justify-center relative">
                <div className="h-58 w-full outline outline-gr15 bg-gr08 flex align-center justify-between p-5 gap-5">
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/building.svg" alt="" />
                        <h6>info@estatein.com</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px] " />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/banknotes.svg" alt="" />
                        <h6>+1 (123) 456-7890</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/offices.svg" alt="" />
                        <h6>Main Headquarters</h6>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px]" />
                    </div>
                    <div className="card-big-gr flex flex-col items-center justify-center gap-5 w-full relative">
                        <img src="/icons/sun.svg" alt="" />
                        <div className='flex gap-[30px] text-[20px] font-semibold'>
                            <a href="">Instagram</a>
                            <a href="">LinkedIn</a>
                            <a href="">Facebook</a>
                        </div>
                        <ArrowUpRightIcon className="absolute right-5 top-5 text-gr30 size-[34px]" />
                    </div>
                </div>
            </section>
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px] w-7xl'>
                    <h3>Let's Connect</h3>
                    <p className='default-text text-gr60'>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>
                </div>
                <form action="" className='grid grid-cols-3 gap-[50px] p-25 border border-gr15 rounded-[12px]'>
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
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>Inquiry Type</p>
                        <Listbox value={selectedInquiryType} onChange={setSelectedInquiryType}>
                            <ListboxButton
                            className='relative flex justify-between default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none'
                            >
                                <span className='default-text text-left overflow-hidden whitespace-nowrap text-ellipsis text-gr60'>{selectedInquiryType || 'Select Inquiry Type'}</span>
                                <ChevronDownIcon
                                    className="absolute right-4 top-[50%] -translate-y-[50%] group pointer-events-none size-8 p-1 fill-white flex-shrink-0"
                                    aria-hidden="true"
                                />
                            </ListboxButton>
                            <ListboxOptions
                                anchor="bottom"
                                transition
                                className={clsx(
                                'w-(--button-width) rounded-[12px] border border-gr15 bg-gr08 p-1 [--anchor-gap:--spacing(1)] focus:outline-none !max-h-[205px]',
                                'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                                )}
                            >
                                {inquiryTypes
                                .map((type) => (
                                    <ListboxOption
                                    key={type}
                                    value={type}
                                    className="group flex cursor-default items-center gap-2 rounded-lg pl-4 pr-3 py-1.5 select-none data-focus:bg-gr10"
                                    >
                                        <div className="text-white default-text">{type}</div>
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='default-text text-white'>How Did You Hear About Us?</p>
                        <Listbox value={selectedHearAbout} onChange={setSelectedHearAbout}>
                            <ListboxButton
                            className='relative flex justify-between default-text px-5 py-6 bg-gr10 border border-gr15 rounded-[8px] focus:border-gr15 focus:outline-none'
                            >
                                <span className='default-text text-left overflow-hidden whitespace-nowrap text-ellipsis text-gr60'>{selectedHearAbout || 'Select'}</span>
                                <ChevronDownIcon
                                    className="absolute right-4 top-[50%] -translate-y-[50%] group pointer-events-none size-8 p-1 fill-white flex-shrink-0"
                                    aria-hidden="true"
                                />
                            </ListboxButton>
                            <ListboxOptions
                                anchor="bottom"
                                transition
                                className={clsx(
                                'w-(--button-width) rounded-[12px] border border-gr15 bg-gr08 p-1 [--anchor-gap:--spacing(1)] focus:outline-none !max-h-[205px]',
                                'transition duration-100 ease-in data-leave:data-closed:opacity-0'
                                )}
                            >
                                {hearAboutOptions
                                .map((option) => (
                                    <ListboxOption
                                    key={option}
                                    value={option}
                                    className="group flex cursor-default items-center gap-2 rounded-lg pl-4 pr-3 py-1.5 select-none data-focus:bg-gr10"
                                    >
                                        <div className="text-white default-text">{option}</div>
                                    </ListboxOption>
                                ))}
                            </ListboxOptions>
                        </Listbox>
                    </div>
                    <div className='flex flex-col gap-4 col-span-3'>
                        <p className='default-text text-white'>Message</p>
                        <textarea className='border resize-none h-[170px] pt-5 pb-6 default-text border-gr15 focus:outline-none rounded-[8px] bg-gr10 px-5 py-6' placeholder='Enter your Message here..' />
                    </div>
                    <div className='flex justify-between col-span-3'>
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
            <section className='bg-gr08 mx-4 md:mx-20 lg:mx-40 mt-40 flex flex-col gap-20 relative stars-before-header'>
                <div className='flex flex-col gap-[14px] w-7xl'>
                    <h3>Discover Our Office Locations</h3>
                    <p className='default-text text-gr60'>Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you.</p>
                </div>
                <div className='grid grid-cols-2 justify-between gap-[30px]'>
                    <div className='flex flex-col p-[50px] border border-gr15 rounded-[12px] gap-10'>
                        <article className='flex flex-col gap-[14px]'>
                            <div>
                                <p className='default-text text-white'>Main Headquarters</p>
                                <h4>123 Estatein Plaza, City Center, Metropolis</h4>
                            </div>
                            <p className='default-text text-gr60'>Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
                        </article>
                        <div className='flex gap-[10px] default-text'>
                            <div className='flex px-5 py-[14px] bg-gr10 rounded-full border border-gr15 gap-[6px]'><EnvelopeIcon className='size-6 fill-white' />info@estatein.com</div>
                            <div className="flex px-5 py-[14px] bg-gr10 rounded-full border border-gr15 gap-[6px]"><PhoneIcon className='size-6 fill-white' />+1 (123) 456-7890</div>
                            <div className='flex px-5 py-[14px] bg-gr10 rounded-full border border-gr15 gap-[6px]'><MapPinIcon className='size-6 fill-white' />Metropolis</div>
                        </div>
                        <Link to={'/'} className="link-pr">Get Direction</Link>
                    </div>
                    <div className='flex flex-col p-[50px] border border-gr15 rounded-[12px] gap-10'>
                        <article className='flex flex-col gap-[14px]'>
                            <div>
                                <p className='default-text text-white'>Regional Offices</p>
                                <h4>456 Urban Avenue, Downtown District, Metropolis</h4>
                            </div>
                            <p className='default-text text-gr60'>Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.</p>
                        </article>
                        <div className='flex gap-[10px] default-text'>
                            <div className='flex px-5 py-[14px] bg-gr10 rounded-full border border-gr15 gap-[6px]'><EnvelopeIcon className='size-6 fill-white' />info@restatein.com</div>
                            <div className="flex px-5 py-[14px] bg-gr10 rounded-full border border-gr15 gap-[6px]"><PhoneIcon className='size-6 fill-white' />+1 (123) 628-7890</div>
                            <div className='flex px-5 py-[14px] bg-gr10 rounded-full border border-gr15 gap-[6px]'><MapPinIcon className='size-6 fill-white' />Metropolis</div>
                        </div>
                        <Link to={'/'} className="link-pr">Get Direction</Link>
                    </div>
                </div>
            </section>
            <section className='grid grid-cols-4 p-20 gap-5 bg-[url("/contact-gallery-bg.svg")] bg-gr10 border border-gr15 rounded-[12px] mx-4 md:mx-20 lg:mx-40 mt-40 relative'>
                <img src="/images/contact/gallery-photo1.png" alt="" className='col-span-2 rounded-[10px] object-cover w-full h-full' />
                <img src="/images/contact/gallery-photo2.png" alt="" className='col-span-2 rounded-[10px] object-cover w-full h-full' />
                <img src="/images/contact/gallery-photo3.png" alt="" className='col-span-2 rounded-[10px] object-cover w-full h-full' />
                <img src="/images/contact/gallery-photo4.png" alt="" className='rounded-[10px] object-cover w-full h-full' />
                <img src="/images/contact/gallery-photo5.png" alt="" className='rounded-[10px] object-cover w-full h-full' />
                <article className='flex flex-col justify-center gap-[14px] col-span-2 w-full'>
                    <h3 className='relative stars-before-header'>Explore Estatein's World</h3>
                    <p className='default-text text-gr60 pr-5'>Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
                </article>
                <img src="/images/contact/gallery-photo6.png" alt="" className='col-span-2 rounded-[10px] object-cover w-full h-full' />
            </section>
        </div>
        </>
    )
}