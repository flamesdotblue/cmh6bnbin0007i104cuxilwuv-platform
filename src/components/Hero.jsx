import React from 'react'
import { ArrowRight, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-16 md:grid-cols-2 md:pt-24">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-gray-900 px-3 py-1 text-xs text-gray-300">
            <Star className="h-3.5 w-3.5 text-yellow-400" />
            New: Smart tags & advanced risk analytics
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Journal your Forex trades. Find your edge. Grow with discipline.
          </h1>
          <p className="mt-4 max-w-xl text-gray-300">
            PipTrack is a modern Forex trading journal that helps you record, analyze, and optimize your strategy with data-driven insights.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-5 py-3 text-sm font-medium text-white hover:bg-emerald-600"
            >
              Start free — no card
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800"
            >
              View demo
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-400">Free plan includes unlimited trade logs and basic analytics.</p>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/10 blur-2xl" />
          <div className="rounded-xl border border-white/10 bg-gray-900/60 p-4 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-white/10 bg-gray-950 p-4">
                <p className="text-xs text-gray-400">Win rate</p>
                <p className="mt-1 text-2xl font-semibold">57.8%</p>
                <div className="mt-3 h-2 w-full overflow-hidden rounded bg-gray-800">
                  <div className="h-full w-[58%] bg-emerald-500" />
                </div>
              </div>
              <div className="rounded-lg border border-white/10 bg-gray-950 p-4">
                <p className="text-xs text-gray-400">Avg R:R</p>
                <p className="mt-1 text-2xl font-semibold">1 : 2.1</p>
                <div className="mt-3 flex items-center gap-1 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs">Improving this month</span>
                </div>
              </div>
              <div className="col-span-2 rounded-lg border border-white/10 bg-gray-950 p-4">
                <p className="text-xs text-gray-400">Recent trades</p>
                <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
                  {[
                    { pair: 'EUR/USD', r: '+1.5R', d: '+0.8%' },
                    { pair: 'GBP/JPY', r: '-0.8R', d: '-0.4%' },
                    { pair: 'XAU/USD', r: '+2.3R', d: '+1.2%' },
                  ].map((t, i) => (
                    <div key={i} className="rounded-md border border-white/10 bg-gray-900 p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-200">{t.pair}</span>
                        <span className={t.r.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}>{t.r}</span>
                      </div>
                      <div className="mt-1 text-gray-400">P/L: {t.d}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 rounded-lg border border-white/10 bg-gray-950 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-400">Equity curve</p>
                  <p className="text-xs text-emerald-400">+6.2% MTD</p>
                </div>
                <div className="mt-3 h-28 w-full rounded bg-gradient-to-b from-gray-800 to-gray-900">
                  <svg viewBox="0 0 300 100" className="h-full w-full">
                    <path d="M0,80 C40,70 60,90 90,65 C120,40 150,45 180,35 C210,25 230,30 260,20 C280,14 300,16 300,16" fill="none" stroke="url(#grad)" strokeWidth="3" />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#22d3ee" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
