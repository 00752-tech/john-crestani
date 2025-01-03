'use client'

import { Share2, ArrowRightCircle } from 'lucide-react'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share'

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  return (
    <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
      <span className="flex items-center text-white">
        <Share2 className="w-5 h-5 mr-2" />
        Share
      </span>
      <FacebookShareButton url={url} title={title} >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <ArrowRightCircle className="w-6 h-6 text-pink-500 animate-pulse" />
    </div>
  )
}

