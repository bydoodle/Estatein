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
    <header className="fixed w-full h-17 md:h-19 lg:h-25 px-4 md:px-20 lg:px-40 top-0 bg-gr10 flex items-center justify-between text-lg outline outline-gr15 z-100">
      <Link to="/" className="flex-shrink-0">
        <img src="/icons/logo.svg" alt='Logo' />
      </Link>
      <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[30px]" aria-label='test'>
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
        className={`!py-[16px] active-header-link ${location.pathname === '/contact' ? '!bg-pr60 outline-none' : ''}`}
      >
        Contact Us
      </Link>
    </header>
  )
}
