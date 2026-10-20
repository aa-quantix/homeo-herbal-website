import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
    const WHATSAPP_NUMBER = '923258242383';
    const message = encodeURIComponent("Hello Homeo Health Zone, I'd like to book an appointment.");
    const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        >
            <MessageCircle size={32} fill="white" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-sage-900 px-3 py-1.5 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;
