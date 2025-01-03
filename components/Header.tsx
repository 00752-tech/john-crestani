import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div className="announcement-banner fixed top-0 w-full z-20">
        Limited Time Offer: 50% Off Super Affiliate System Pro 2025!
      </div>
      <header className="bg-black/95 backdrop-blur-sm shadow-md fixed w-full z-10 top-8">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text-purple">Super Affiliate</span>{' '}
            <span className="gradient-text-green">System Pro</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/about" className="text-white hover:text-pink-500 transition-colors">About</Link></li>
              <li><Link href="/features" className="text-white hover:text-pink-500 transition-colors">Features</Link></li>
              <li><Link href="/testimonials" className="text-white hover:text-pink-500 transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="text-white hover:text-pink-500 transition-colors">FAQ</Link></li>
              <li><Link href="/free-tools" className="text-white hover:text-pink-500 transition-colors">Free Tools</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

