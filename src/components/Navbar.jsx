import React from 'react'
import { LineChart } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60 border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500">
            <LineChart className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">PipTrack</span>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-gray-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="hidden rounded-md px-3 py-2 text-sm text-gray-300 hover:text-white md:block">Sign in</a>
          <a href="#" className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">Start free</a>
        </div>
      </div>
    </header>
  )
}
