import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'AI Affiliate Marketing Tools | JohnCrestani.me',
    template: '%s | Super Affiliate System Pro Tools',
  },
  description: 'Free AI-powered affiliate marketing tools and calculators to help you estimate earnings, plan campaigns, and optimize your strategy. Part of John Crestani\'s Super Affiliate System Pro.',
}

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-900">
      {children}
    </div>
  )
}

