import React from 'react';
import { Layers, Package, Users, UserCheck } from 'lucide-react';

const valueItems = [
  {
    icon: Layers,
    title: 'Multiple Categories',
    desc: 'Tech to lifestyle',
    delay: '0ms'
  },
  {
    icon: Package,
    title: 'Pre-Owned Finds',
    desc: 'Verified condition',
    delay: '100ms'
  },
  {
    icon: Users,
    title: 'Member Marketplace',
    desc: 'Exclusive access',
    delay: '200ms'
  },
  {
    icon: UserCheck,
    title: 'Personal Account',
    desc: 'Manage everything',
    delay: '300ms'
  }
];

export default function ValueStrip() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {valueItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 reveal"
                style={{ transitionDelay: item.delay }}
              >
                <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-midnight-navy font-heading text-base leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
