import React from 'react';
import { X, Shield, Mail } from 'lucide-react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-rysing-dark border border-white/10 rounded-lg shadow-2xl overflow-hidden">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-white mb-2">Join the Watch</h2>
          <p className="text-gray-400 mb-8">Choose your path. Begin your journey.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Option A: The Scout */}
            <div className="p-6 rounded-lg border border-white/5 bg-black/20 hover:border-white/10 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="text-gray-400 group-hover:text-white transition-colors" size={24} />
                <h3 className="text-xl font-bold text-white">The Scout</h3>
              </div>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">
                Join the waitlist. Get notified when Wave 2 opens.
              </p>
              <button className="w-full py-3 px-4 rounded bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-transparent hover:border-white/20">
                Join Waitlist
              </button>
            </div>

            {/* Option B: The Founder */}
            <div className="p-6 rounded-lg border border-rysing-gold/20 bg-rysing-gold/5 hover:bg-rysing-gold/10 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-rysing-gold" size={24} />
                <h3 className="text-xl font-bold text-rysing-gold">The Founder</h3>
              </div>
              <p className="text-sm text-gray-300 mb-6 min-h-[40px]">
                Skip the line. Get immediate TestFlight access + 'Founding Protector' Title.
              </p>
              <button className="w-full py-3 px-4 rounded bg-rysing-gold hover:bg-rysing-gold/90 text-black font-bold transition-all shadow-lg shadow-rysing-gold/20">
                Become a Founder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
