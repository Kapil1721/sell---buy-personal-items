import React from 'react';
import PaperDocumentLanding from '../components/home/PaperDocumentLanding';

export default function Home({ onOpenAuth }) {
  return (
    <main className="relative min-h-[calc(100vh-5rem)]">
      <PaperDocumentLanding onOpenAuth={onOpenAuth} />
    </main>
  );
}

