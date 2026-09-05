import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Sell it, sell it, sell it?',
    answer:
      'Sell it, sell it, sell it is a curated membership marketplace where verified members can discover exceptional pre-owned personal items at unbeatable prices, or easily list and sell quality items they no longer use.',
  },
  {
    question: 'Why do I need a membership?',
    answer:
      'The membership model allows us to curate a high-quality community, verify listings, eliminate spam bots and low-ballers, and maintain an ad-free experience focused purely on genuine discovery and real value.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'Membership is a flat monthly fee of $19. There are no commission fees or surprise percentage cuts on top of your purchases for verified members.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your membership anytime directly from your dashboard settings. There are no lock-in contracts, cancellation fees, or penalties.',
  },
  {
    question: 'How does shipping and local pickup work?',
    answer:
      'Buyers and sellers can opt for integrated insured carrier shipping with end-to-end tracking, or coordinate convenient local pickup exchanges through our private member messaging.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((curr) => (curr === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-32 bg-slate-50 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-midnight-navy mb-16 reveal text-center font-heading">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 bg-white rounded-2xl overflow-hidden transition-shadow duration-200 hover:shadow-md reveal"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50/80 transition cursor-pointer"
                >
                  <span className="text-lg font-bold text-midnight-navy font-heading pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-8 pb-8 text-slate-500 leading-relaxed text-sm sm:text-base animate-fade-in border-t border-slate-100/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
