import React from 'react';
import { Leaf, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

interface FooterProps {
    setActivePage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-primary-900 text-white pt-16 pb-8 overflow-hidden">
            {/* Floating particles */}
            <div className="absolute inset-0 z-0">
                <FloatingParticles count={20} dark />
            </div>

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-950/80 via-primary-900/60 to-primary-800/40 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-6">
                        <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => setActivePage('home')}
                        >
                            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                                <Leaf size={22} className="text-green-300" />
                            </div>
                            <span className="text-2xl font-semibold text-white" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                                Homeo Health Zone
                            </span>
                        </div>
                        <p className="text-green-100/70 leading-relaxed text-sm">
                            Restoring health naturally through individualized homeopathic care. Excellence in holistic medicine for a balanced life.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Facebook, href: 'https://www.facebook.com/share/p/1EMTTJhJj8/', label: 'Facebook' },
                                { Icon: Instagram, href: 'https://www.instagram.com/house_of_homeoherbal/', label: 'Instagram' },
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-white/10 hover:bg-green-500/30 border border-white/10 hover:border-green-400/40 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Icon size={16} className="text-green-200" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-base font-semibold text-white mb-6 tracking-wide">Explore</h3>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Treatments', 'Testimonials', 'Contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => setActivePage(item.toLowerCase())}
                                        className="text-green-100/70 hover:text-green-300 text-sm transition-colors duration-200 hover:translate-x-1 inline-flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 rounded-full bg-green-400/50 group-hover:bg-green-400 transition-colors" />
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-base font-semibold text-white mb-6 tracking-wide">Our Services</h3>
                        <ul className="space-y-3">
                            {['Chronic Disease Care', 'Pediatric Homeopathy', 'Mental Wellness', 'Skin & Hair Health', 'Respiratory Care'].map((s) => (
                                <li key={s} className="text-green-100/70 text-sm flex items-center gap-1.5">
                                    <span className="w-1 h-1 rounded-full bg-green-400/50" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base font-semibold text-white mb-6 tracking-wide">Contact Us</h3>
                        <ul className="space-y-4">
                            {[
                                { Icon: MapPin, text: 'Huma Block 2, Flat 8, Allama Iqbal Town, Lahore' },
                                { Icon: Phone, text: '+92 325 8242383' },
                            ].map(({ Icon, text }, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <Icon size={16} className="shrink-0 text-green-400 mt-0.5" />
                                    <span className="text-green-100/70 text-sm">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-green-100/50 text-sm">
                    <p>© Homeo Health Zone Homeopathy Clinic. All rights reserved.</p>
                    <div className="flex items-center gap-1.5">
                        <Leaf size={12} className="text-green-400" />
                        <span>Healing naturally, one life at a time.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
