import { Users, CheckCircle, Clock, Award } from 'lucide-react'
import type { Event, Registration } from '../types'

interface StatCardsProps {
  event: Event
  registrations: Registration[]
}

export default function StatCards({ event, registrations }: StatCardsProps) {
  const verifiedCount = registrations.filter(r => r.status === 'pending_verification').length
  const pendingPaymentCount = registrations.filter(r => r.status === 'pending_payment').length
  const ieeeMembers = registrations.filter(r => r.isIEEEMember).length

  const capacity = event.capacity || 0
  const capacityPercentage = event.capacity ? Math.round((registrations.length / event.capacity) * 100) : 0

  const stats = [
    {
      label: 'Total Registrations',
      value: registrations.length,
      subLabel: capacity ? `${capacityPercentage}% of ${capacity} capacity` : 'Unlimited',
      icon: Users,
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/30',
      textColor: 'text-yellow-400',
      accentColor: 'bg-yellow-500/20',
    },
    {
      label: 'Payments Verified',
      value: verifiedCount,
      subLabel: `${registrations.length > 0 ? Math.round((verifiedCount / registrations.length) * 100) : 0}% verified`,
      icon: CheckCircle,
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-400',
      accentColor: 'bg-green-500/20',
    },
    {
      label: 'Pending Payments',
      value: pendingPaymentCount,
      subLabel: `${registrations.length > 0 ? Math.round((pendingPaymentCount / registrations.length) * 100) : 0}% pending`,
      icon: Clock,
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      textColor: 'text-orange-400',
      accentColor: 'bg-orange-500/20',
    },
    {
      label: 'IEEE Members',
      value: ieeeMembers,
      subLabel: `${registrations.length > 0 ? Math.round((ieeeMembers / registrations.length) * 100) : 0}% members`,
      icon: Award,
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      textColor: 'text-purple-400',
      accentColor: 'bg-purple-500/20',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <div
            key={index}
            className={`${stat.bgColor} border ${stat.borderColor} rounded-xl p-5 transition duration-200 hover:border-opacity-60`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-2">
                  {stat.label}
                </p>
                <p className={`text-3xl font-bold ${stat.textColor} mb-2`}>
                  {stat.value.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500">{stat.subLabel}</p>
              </div>
              <div className={`${stat.accentColor} p-3 rounded-lg flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
