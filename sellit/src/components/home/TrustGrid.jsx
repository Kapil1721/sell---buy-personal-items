import React from 'react';
import { Info, ShieldCheck, UserCheck, Lock, HelpCircle, FileText } from 'lucide-react';

const trustPoints = [
  {
    icon: Info,
    title: 'Clear Item Information',
    desc: 'Every listing includes high-resolution photos and specific condition details.',
    delay: '0ms',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Membership',
    desc: 'No hidden fees or surprise charges. Just a simple one-time $59 fee for lifetime access.',
    delay: '100ms',
  },
  {
    icon: UserCheck,
    title: 'Account Management',
    desc: 'Easily upgrade, downgrade, or update your personal info at any time.',
    delay: '200ms',
  },
  {
    icon: Lock,
    title: 'Secure Checkout',
    desc: 'All member transactions are encrypted and processed through secure gateways.',
    delay: '300ms',
  },
  {
    icon: HelpCircle,
    title: 'Dedicated Support',
    desc: 'Direct access to our customer support team for any marketplace questions.',
    delay: '400ms',
  },
  {
    icon: FileText,
    title: 'Clear Policies',
    desc: 'Straightforward terms of service and member guidelines for everyone.',
    delay: '500ms',
  },
];

export default function TrustGrid() {
  return (
    <section className="py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {trustPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="reveal group"
                style={{ transitionDelay: point.delay }}
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-midnight-navy font-heading">
                  {point.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {point.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
