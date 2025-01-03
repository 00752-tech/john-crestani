'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Share2 } from 'lucide-react'

export default function Footer() {
  const handleShare = (platform: string) => {
    const url = encodeURIComponent('https://johncrestani.me')
    const text = encodeURIComponent('Master Affiliate Marketing in 2025 with JohnCrestani.me!')
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`)
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`)
        break
      case 'whatsapp':
        window.open(`https://wa.me/?text=${text}%20${url}`)
        break
    }
  }

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Share Section */}
        <div className="mb-16 flex items-center gap-4">
          <span className="flex items-center text-gray-400">
            <Share2 className="w-5 h-5 mr-2" />
            Share
          </span>
          <button 
            onClick={() => handleShare('facebook')}
            className="bg-[#1877f2] p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('twitter')}
            className="bg-[#1da1f2] p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('linkedin')}
            className="bg-[#0a66c2] p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <Linkedin className="w-5 h-5" />
          </button>
          <button 
            onClick={() => handleShare('whatsapp')}
            className="bg-[#25d366] p-2 rounded-full hover:opacity-80 transition-opacity"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>
        </div>

        {/* Main Footer Sections */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl mb-4">
              <span className="gradient-text-green">JohnCrestani</span>
              <span className="text-gray-400">.me</span>
            </h3>
            <p className="text-gray-400">
              Empowering affiliate marketers since 2017, now optimized for 2025 and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4 gradient-text-purple">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/features" className="text-gray-400 hover:text-white">Features</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link href="/free-tools" className="text-gray-400 hover:text-white">Free Tools</Link></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-xl mb-4 gradient-text-purple">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms &amp; Conditions</Link></li>
              <li><Link href="/affiliate-disclaimer" className="text-gray-400 hover:text-white">Affiliate Disclaimer</Link></li>
              <li>
                <a href="mailto:passiveincomestreaming@gmail.com" className="text-gray-400 hover:text-white">
                  Contact: passiveincomestreaming@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="bg-gray-900 p-6 rounded-lg mb-8 text-center">
          <p className="mb-2">
            <span className="text-pink-500 font-semibold">Affiliate Disclosure:</span>{' '}
            As an affiliate, we earn from qualifying purchases. When you click our links and make purchases, 
            we may receive commissions. This comes at no additional cost to you and helps support our work 
            in providing valuable information and tools.
          </p>
          <Link href="/affiliate-disclaimer" className="text-pink-500 hover:text-pink-400 underline">
            Learn more about our affiliate relationships
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} JohnCrestani.me. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

