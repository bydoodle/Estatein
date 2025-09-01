import { Link, useLocation } from 'react-router-dom'

const links = [
  {href: '/', label: 'Home'},
  {href: '/about', label: 'About Us'},
  {href: '/properties', label: 'Properties'},
  {href: '/services', label: 'Services'}
]

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed max-w-screen w-full h-17 xl:h-19 2xl:h-25 px-4 xl:px-20 2xl:px-[162px] lg:px-40 top-0 bg-gr10 flex items-center justify-between text-lg outline outline-gr15 z-100 default-text">
      <Link to="/" className="flex-shrink-0 h-7 xl:h-[34px] 2xl:h-12 ">
        <img src="/icons/logo.svg" alt='Logo' className='h-full'/>
      </Link>
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center 2xl:gap-[30px] xl:gap-6" aria-label='test'>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            to={href}
            className={location.pathname === href ? 'active-header-link' : ''}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link
        to='/contact'
        className={`2xl:!py-[16px] xl:!py-[14px] active-header-link ${location.pathname === '/contact' ? '!bg-pr60 outline-none' : ''}`}
      >
        Contact Us
      </Link>
    </header>
  )
}
