'use client'

import { ReactNode } from 'react'

interface InteractiveButtonProps {
  onClick: () => void
  className?: string
  children: ReactNode
}

export default function InteractiveButton({ onClick, className, children }: InteractiveButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  )
}

