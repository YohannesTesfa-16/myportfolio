/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ContactModal } from './components/ContactModal';
import { ResumeModal } from './components/ResumeModal';
import { ImageLightbox } from './components/ImageLightbox';

export default function App() {
  const [activeDemoProjectId, setActiveDemoProjectId] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string } | null>(null);

  const handleOpenDemo = (projectId: string) => {
    setActiveDemoProjectId(projectId);
  };

  const handleOpenLightbox = (src: string, title: string) => {
    setLightboxData({ src, title });
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] font-sans selection:bg-[#bef264] selection:text-black">
      {/* Top Navbar */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 01 // ABOUT */}
        <AboutSection onOpenDemo={handleOpenDemo} />

        {/* Section 02 // SELECTED WORK */}
        <ProjectsSection
          onOpenDemo={handleOpenDemo}
          onOpenLightbox={handleOpenLightbox}
        />

        {/* Section 03 // TECHNICAL STACK */}
        <TechStackSection />

        {/* Section 04 // INITIATE TRANSMISSION */}
        <ContactSection
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContactModal={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive System / Project Inspection Modal */}
      <ProjectModal
        projectId={activeDemoProjectId}
        onClose={() => setActiveDemoProjectId(null)}
      />

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* High-Resolution Image Lightbox */}
      <ImageLightbox
        imageSrc={lightboxData?.src || null}
        imageTitle={lightboxData?.title || ''}
        onClose={() => setLightboxData(null)}
      />
    </div>
  );
}
