import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

interface NavbarProps {
    activePage: string;
    setActivePage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Services', id: 'services' },
        { name: 'Treatments', id: 'treatments' },
        { name: 'Testimonials', id: 'testimonials' },
        { name: 'Contact', id: 'contact' },
    ];

    const scrolled = isScrolled;

    // Only apply white background when on home page and scrolled
    const shouldHaveWhiteBg = activePage === 'home' && scrolled;

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${shouldHaveWhiteBg
                    ? 'bg-white shadow-md py-3'
                    : 'bg-green-700 shadow-md py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => setActivePage('home')}
                    className="flex items-center gap-2 group"
                >
                    <div className={`p-1.5 rounded-lg transition-colors ${shouldHaveWhiteBg ? 'bg-green-700' : 'bg-green-600'}`}>
                        <Leaf size={22} className="text-white" />
                    </div>
                    <div className="flex flex-col leading-none text-left">
                        <span className={`text-xl font-serif font-bold tracking-tight ${shouldHaveWhiteBg ? 'text-green-900' : 'text-white'}`}>
                            Homeo Health Zone
                        </span>
                        <span className={`text-[9px] font-bold tracking-[0.25em] uppercase ${shouldHaveWhiteBg ? 'text-green-600' : 'text-green-100'}`}>
                            House of Homeoherbal
                        </span>
                    </div>
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-7">
                    {navLinks.map(link => (
                        <button
                            key={link.id}
                            onClick={() => setActivePage(link.id)}
                            className={`text-sm font-semibold transition-colors ${activePage === link.id
                                    ? 'text-emerald-200'
                                    : shouldHaveWhiteBg
                                        ? 'text-green-800 hover:text-emerald-600'
                                        : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </button>
                    ))}
                    {/* Book Consultation button removed as requested */}
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen
                        ? <X size={26} className={shouldHaveWhiteBg ? 'text-green-900' : 'text-white'} />
                        : <Menu size={26} className={shouldHaveWhiteBg ? 'text-green-900' : 'text-white'} />
                    }
                </button>
            </div>

            {/* Mobile drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-xl border-t border-green-100 absolute w-full">
                    <div className="px-6 py-6 space-y-2">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => { setActivePage(link.id); setIsMobileMenuOpen(false); }}
                                className={`block w-full text-left px-4 py-3 rounded-xl font-semibold text-base ${activePage === link.id ? 'bg-green-50 text-green-700' : 'text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                        {/* Book Consultation button removed from mobile menu as requested */}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
