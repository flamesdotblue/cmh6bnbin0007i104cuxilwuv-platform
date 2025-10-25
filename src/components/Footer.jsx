import React from 'react'
import { Check, LineChart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Trade with clarity. Review with purpose.</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Keep a disciplined routine</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Identify your profitable setups</li>
              <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Improve risk and consistency</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100">Create free account</a>
          </div>
          <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500">
                <LineChart className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold">PipTrack</div>
                <div className="text-sm text-gray-400">The Forex trade journal that helps you find your edge.</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-300 md:grid-cols-3">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#faq" className="hover:text-white">FAQ</a>
              <a href="#" className="hover:text-white">Security</a>
              <a href="#" className="hover:text-white">Support</a>
              <a href="#" className="hover:text-white">Terms</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} PipTrack. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
