import { Link, useLocation } from 'react-router-dom'

const Links = [
    {
        title: 'Home',
        links: ["Hero Section", "Features", "Properties", "Testimonials", "FAQ's"]
    },
    {
        title: 'About Us',
        links: ['Our Story', 'Our Works', 'How It Works', 'Our Team', 'Out Clients']
    },
    {
        title: 'Properties',
        links: ['Portfolio', 'Categories']
    },
    {
        title: 'Services',
        links: ['Valuation Mastery', 'Strategic Marketing', 'Negotiation Wizardry', 'Closing Success', 'Property Management']
    },
    {
        title: 'Contact Us',
        links: ['Contact Form', 'Our Offices']
    }
]

const socialMediaLinks = [
    {
        link: 'https://www.facebook.com',
        icon: '/icons/facebook.svg'
    },
    {
        link: 'https://www.linkedin.com/',
        icon: '/icons/linkedin.svg'
    },
    {
        link: 'https://x.com/home',
        icon: '/icons/twitter.svg'
    },
    {
        link: 'https://youtube.com',
        icon: '/icons/youtube.svg'
    }
]

export default function Footer() {
    return (
        <>
        <div className='w-full px-[162px] py-25 flex items-center justify-between gap-[250px] bg-gr08 border border-t-gr15 border-b-gr15 border-x-0
        bg-[url("/footer-banner-bg-2.png"),_url("/footer-banner-bg-1.png")] bg-position-[left_bottom,_right_bottom] bg-no-repeat'>
            <div className='flex flex-col gap-[14px]'>
                <h3>Start Your Real Estate Journey Today</h3>
                <p className='default-text text-gr60'>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
            </div>
            <Link to='/properties' className='link-pr whitespace-nowrap'>Explore Properties</Link>
        </div>
            <footer className='w-full bg-gr08 px-[162px] py-25 flex justify-between gap-20 !-tracking-[0.6%]'>
                <div className='flex flex-col gap-[30px] w-[538px]'>
                    <Link to="/" className="flex-shrink-0">
                        <img src="/icons/logo.svg" alt='Logo' />
                    </Link>
                    <div className='flex items-center gap-[10px] email-container default-text w-[423px]'>
                        <img src="icons/mail.svg" alt="" />
                        <input type="email" className='focus:outline-none focus:ring-0 focus:border-transparent h-[24px] w-full' placeholder='Enter Your Email'/>
                        <button type='submit'>
                            <img src="icons/send.svg" alt="" />
                        </button>
                    </div>
                </div>
                {Links.map((section) => (
                    <div key={section.title} className='flex flex-col gap-[30px]'>
                        <h6 className='!font-medium text-gr60'>{section.title}</h6>
                        <nav className='flex flex-col gap-5'>
                            {section.links.map((link, id) => (
                                <Link key={id} to={link}>{link}</Link>
                            ))}
                        </nav>
                    </div>
                ))}
            </footer>
            <div className='w-full bg-gr10 px-[162px] py-4 flex justify-between items-center'>
                <small className='py-[10px]'>@2023 Estatein. All Rights Reserved.<Link to={'/'} className='ml-[38px]'>Terms & Conditions</Link></small>
                <div className='flex gap-[10px] py-[10px]'>
                    {socialMediaLinks.map((link, id) => (
                        <a key={id} href={link.link} rel="noopener noreferrer" target='_blank' className='bg-gr08 rounded-full p-[14px]'> <img src={link.icon} alt="" /> </a>
                    ))}
                </div>
            </div>
        </>
    )
}