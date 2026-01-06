'use client';

import { FaHeart, FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-sage text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="script-font text-5xl mb-4">Dara & Lingcheu</h3>
          <p className="text-lg mb-6">May 01, 2026</p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="#"
              className="hover:text-gold transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="hover:text-gold transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="mailto:sophia.andre@example.com"
              className="hover:text-gold transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-sm">
            Made with <FaHeart className="text-gold" /> for our special day
          </p>
          <p className="text-sm mt-2 opacity-75">
            © 2026 team ot luy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
