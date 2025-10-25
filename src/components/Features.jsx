import React from 'react'
import { TrendingUp, BarChart3, ShieldCheck, Cloud } from 'lucide-react'

const features = [
  {
    title: 'Fast trade logging',
    description: 'Record entries, exits, screenshots, and notes in seconds. Smart tags help you keep setups organized.',
    icon: TrendingUp,
  },
  {
    title: 'Deep performance analytics',
    description: 'Break down performance by pair, session, setup, weekday, and more to discover what truly works.',
    icon: BarChart3,
  },
  {
    title: 'Risk-first approach',
    description: 'Position sizing, R-multiple tracking, and max drawdown alerts keep your risk in check.',
    icon: ShieldCheck,
  },
  {
    title: 'Cloud sync & export',
    description: 'Your journal stays in sync across devices. Export CSVs or images for reporting and review.',
    icon: Cloud,
  },
]

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to journal like a pro</h2>
          <p className="mt-3 text-gray-300">Designed for Forex traders who value process over luck. Build consistency with clarity and data.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-xl border border-white/10 bg-gray-900/50 p-5 transition hover:border-emerald-500/40 hover:bg-gray-900">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                <f.icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{f.description}</p>
            </div>
          ))}
        </div>
        <div id="pricing" className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-gray-900/60 p-6">
            <h3 className="text-xl font-semibold">Free</h3>
            <p className="mt-1 text-gray-300">For new and developing traders.</p>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <FeatureItem>Unlimited trade logs</FeatureItem>
              <FeatureItem>Basic analytics</FeatureItem>
              <FeatureItem>Cloud sync</FeatureItem>
            </div>
            <a href="#" className="mt-6 inline-flex rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100">Get started</a>
          </div>
          <div className="relative rounded-xl border border-emerald-500/40 bg-gray-900/60 p-6 ring-1 ring-emerald-500/20">
            <div className="absolute right-4 top-4 rounded-full bg-emerald-500 px-2 py-1 text-xs font-medium text-gray-900">Popular</div>
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-1 text-gray-300">For traders serious about performance.</p>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <FeatureItem>Advanced analytics & filters</FeatureItem>
              <FeatureItem>Risk metrics & drawdown alerts</FeatureItem>
              <FeatureItem>Image uploads & annotations</FeatureItem>
              <FeatureItem>Priority support</FeatureItem>
            </div>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold">$9</span>
              <span className="mb-1 text-sm text-gray-400">/month</span>
            </div>
            <a href="#" className="mt-4 inline-flex rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600">Upgrade to Pro</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ children }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      <span>{children}</span>
    </div>
  )
}
