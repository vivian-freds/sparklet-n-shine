'use client'

import { useState } from 'react'
import { Check, Home, Sparkles, Building, Sofa, Plus } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const tabs = [
  { id: 'residential', label: 'Deep Cleaning' },
  { id: 'airbnb', label: 'Airbnb Turnover' },
  { id: 'addons', label: 'Add-Ons' },
]

const residentialPlans = [
  { name: 'Studio', price: 'KES 3,000 - 4,000' },
  { name: '1 Bedroom', price: 'KES 4,000 - 5,000' },
  { name: '2 Bedroom', price: 'KES 5,500 - 7,000' },
  { name: '3 Bedroom', price: 'KES 7,000 - 8,500+' },
]

const airbnbPlans = [
  { name: 'Studio', daily: 'KES 700', monthly: 'KES 5,500' },
  { name: '1 Bedroom', daily: 'KES 1,000', monthly: 'KES 6,500' },
  { name: '2 Bedroom', daily: 'KES 1,400', monthly: 'KES 7,500' },
]

const addons = [
  { name: 'Couch Cleaning', price: 'From KES 1,500', icon: <Sofa className="h-6 w-6" /> },
  { name: 'Carpet Cleaning', price: 'From KES 1,500', icon: <Building className="h-6 w-6" /> },
  { name: 'Extra Window Cleaning', price: 'From KES 500', icon: <Home className="h-6 w-6" /> },
  { name: 'Heavy Stain Removal', price: 'Price on assessment', icon: <Sparkles className="h-6 w-6" /> },
]

export function PricingSection() {
  const [activeTab, setActiveTab] = useState('residential')
  const [airbnbRateType, setAirbnbRateType] = useState<'daily' | 'monthly'>('monthly')

  return (
    <section id="pricing" className="relative overflow-hidden bg-white py-14 md:py-24">

      {/* Soft purple background blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-purple-50 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-purple-200" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500">
              Pricing & Rates
            </span>
            <span className="h-px w-10 bg-purple-200" />
          </div>
          <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl md:text-5xl">
            Flexible Pricing For{' '}
            <span className="text-purple-600">Every Space</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-500">
            Transparent, affordable rates for all your cleaning needs. Select a category below to view our standard pricing.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Residential View */}
        {activeTab === 'residential' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {residentialPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-3xl border border-slate-100 bg-white p-8 text-center text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Home className="mx-auto mb-4 h-8 w-8 text-purple-500" />
                  <p className="text-sm font-semibold text-slate-500">
                    {plan.name}
                  </p>
                  <div className="mt-4 flex items-center justify-center">
                    <span className="text-2xl font-extrabold leading-none">{plan.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-purple-50 p-6 text-center shadow-sm">
              <p className="text-sm font-medium text-purple-900 md:text-base">
                <Check className="mb-0.5 mr-2 inline-block h-5 w-5 text-purple-600" />
                Includes comprehensive cleaning of kitchen, bathroom, windows, and all detailed areas.
              </p>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="https://wa.me/254718477898" target="_blank">
                <Button className="rounded-md bg-purple-600 px-8 py-6 text-base font-semibold text-white hover:bg-purple-700">
                  Book A Deep Clean
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Airbnb View */}
        {activeTab === 'airbnb' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 p-1">
                <button
                  onClick={() => setAirbnbRateType('daily')}
                  className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                    airbnbRateType === 'daily'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Daily
                </button>
                <button
                  onClick={() => setAirbnbRateType('monthly')}
                  className={`relative rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                    airbnbRateType === 'monthly'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Monthly
                  <span className="absolute -right-3 -top-3 rounded-full bg-amber-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-900 shadow-sm">
                    Recommended
                  </span>
                </button>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-3">
              {airbnbPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="relative flex flex-col rounded-3xl border border-slate-100 bg-white p-8 text-center text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Building className="mx-auto mb-4 h-8 w-8 text-purple-500" />
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                    {plan.name}
                  </p>
                  
                  <div className="mt-6">
                    <p className="text-xs text-slate-400">
                      {airbnbRateType === 'daily' ? 'Daily Rate' : 'Monthly Rate'}
                    </p>
                    <p className="mt-1 text-3xl font-bold">
                      {airbnbRateType === 'daily' ? plan.daily : plan.monthly}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="https://wa.me/254718477898" target="_blank">
                <Button className="rounded-md bg-amber-500 px-8 py-6 text-base font-semibold text-slate-900 hover:bg-amber-400">
                  Experience Our Quality Service Today!
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Add-Ons View */}
        {activeTab === 'addons' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:border-purple-200 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    {addon.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{addon.name}</h3>
                    <p className="mt-1 text-sm font-bold text-purple-600">{addon.price}</p>
                  </div>
                  <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400">
                    <Plus className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <Link href="https://wa.me/254718477898" target="_blank">
                <Button className="rounded-md bg-purple-600 px-8 py-6 text-base font-semibold text-white hover:bg-purple-700">
                  Discuss Your Custom Needs
                </Button>
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  )
}