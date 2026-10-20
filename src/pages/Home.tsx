import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Star, Shield, Heart, Leaf, ChevronDown, Award, Users, Clock } from 'lucide-react';
import Molecule3D from '../components/Molecule3D';
import FloatingParticles from '../components/FloatingParticles';

const WHATSAPP_NUMBER = '923258242383';

const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile
        ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`
        : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

interface HomeProps {
    setActivePage: (page: string) => void;
}

const stats = [
    { value: '15+', label: 'Years Experience', icon: Award },
    { value: '8,000+', label: 'Happy Patients', icon: Users },
    { value: '200+', label: 'Conditions Treated', icon: Heart },
    { value: '98%', label: 'Success Rate', icon: Star },
];

const features = [
    {
        icon: Leaf,
        title: 'Purely Natural',
        desc: 'Remedies crafted from plants, minerals, and natural substances — zero side effects, complete safety.',
        color: 'bg-primary-50',
        iconColor: 'text-primary-600',
        border: 'border-primary-100',
    },
    {
        icon: Heart,
        title: 'Holistic Healing',
        desc: 'We treat the root cause, not just symptoms. Mind, body, and spirit aligned for lasting wellness.',
        color: 'bg-amber-50',
        iconColor: 'text-amber-600',
        border: 'border-amber-100',
    },
    {
        icon: Shield,
        title: 'Safe for All Ages',
        desc: 'Gentle enough for newborns, effective for seniors. Trusted by families for generations.',
        color: 'bg-sky-50',
        iconColor: 'text-sky-600',
        border: 'border-sky-100',
    },
    {
        icon: Clock,
        title: 'Lasting Results',
        desc: 'Deep, constitutional healing that strengthens your vital force and prevents recurrence.',
        color: 'bg-rose-50',
        iconColor: 'text-rose-600',
        border: 'border-rose-100',
    },
];

const conditions = [
    { name: 'Chronic Fatigue', img: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Allergies', img: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Skin Disorders', img: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Hormonal Issues', img: 'https://images.pexels.com/photos/3807733/pexels-photo-3807733.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Child Health', img: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { name: 'Anxiety & Stress', img: 'https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function Home({ setActivePage }: HomeProps) {
    const [heroVisible, setHeroVisible] = useState(false);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const t = setTimeout(() => setHeroVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', '!translate-y-0');
                    }
                });
            },
            { threshold: 0.15 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const handleWhatsApp = () => {
        const url = getWhatsAppLink('Hello, I would like to book a consultation.');
        window.location.href = url;
    };

    return (
        <div className="overflow-hidden">
            {/* HERO */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Natural healing herbs"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/80 to-primary-600/50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-transparent" />
                </div>

                {/* Particles */}
                <div className="absolute inset-0 z-10">
                    <FloatingParticles count={25} dark />
                </div>

                {/* Decorative circles */}
                <div className="absolute top-20 right-[15%] w-80 h-80 border border-white/10 rounded-full z-10 animate-spin-slow" />
                <div className="absolute top-32 right-[18%] w-56 h-56 border border-white/15 rounded-full z-10" style={{ animation: 'spin 30s linear reverse infinite' }} />

                {/* Content */}
                <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <div
                            className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-green-200 px-4 py-2 rounded-full text-sm font-medium mb-8 transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <Leaf className="w-3.5 h-3.5" />
                            Certified Classical Homeopathy
                        </div>

                        <h1
                            className={`text-5xl md:text-6xl xl:text-7xl font-semibold text-white leading-[1.05] mb-6 transition-all duration-1000 delay-100 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            Heal with<br />
                            <span className="text-green-300">Nature's</span><br />
                            Pure Power
                        </h1>

                        <p
                            className={`text-lg text-green-100/90 leading-relaxed max-w-xl mb-10 transition-all duration-1000 delay-200 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            Experience the transformative power of classical homeopathy. Personalized treatments that address the root cause — naturally, gently, and permanently.
                        </p>

                        <div
                            className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <button
                                onClick={handleWhatsApp}
                                className="inline-flex items-center gap-3 bg-[#25D366]/90 hover:bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 backdrop-blur-sm"
                            >
                                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </button>
                        </div>

                        {/* Trust indicators */}
                        <div
                            className={`flex flex-wrap items-center gap-6 mt-10 transition-all duration-1000 delay-500 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {['https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=80',
                                        'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=80',
                                        'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=80'].map((src, i) => (
                                            <img key={i} src={src} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
                                        ))}
                                </div>
                                <span className="text-white/80 text-sm">8,000+ healed</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                                ))}
                                <span className="text-white/80 text-sm ml-1">5.0 rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - 3D Molecule */}
                    <div
                        className={`flex justify-center items-center transition-all duration-1200 delay-400 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`}
                    >
                        <div className="relative">
                            {/* Glowing rings */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-72 h-72 border border-white/10 rounded-full animate-spin-slow" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-56 h-56 border border-white/15 rounded-full" style={{ animation: 'spin 25s linear reverse infinite' }} />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-40 h-40 border border-green-400/20 rounded-full animate-pulse" />
                            </div>

                            {/* Green Circular Background with Image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl shadow-green-500/20 border border-green-300/30 relative bg-gradient-to-tr from-green-600 via-emerald-500 to-emerald-400">
                                    <img
                                        src="https://images.pexels.com/photos/1072163/pexels-photo-1072163.jpeg?auto=compress&cs=tinysrgb&w=400"
                                        alt="Green leaf molecular background"
                                        className="w-full h-full object-cover animate-spin-slow opacity-35 brightness-130 contrast-110 mix-blend-overlay"
                                        style={{ animationDuration: '60s' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-green-800/20 via-transparent to-white/20" />
                                </div>
                            </div>

                            {/* Molecule */}
                            <div className="relative z-10 flex items-center justify-center w-80 h-80">
                                <Molecule3D size={280} />
                            </div>

                            {/* Floating pills */}
                            <div className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 animate-float">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span className="text-white text-xs font-medium">100% Natural</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 animate-float-slow">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-3.5 h-3.5 text-green-400" />
                                    <span className="text-white text-xs font-medium">Zero Side Effects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
                    <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
                    <ChevronDown className="w-4 h-4 text-white/60" />
                </div>
            </section>

            {/* STATS BAR */}
            <section className="relative bg-white py-14 px-4 md:px-8 lg:px-16 border-b border-neutral-100">
                <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(({ value, label, icon: Icon }, i) => (
                        <div
                            key={label}
                            ref={(el) => { sectionRefs.current[i] = el; }}
                            className="text-center opacity-0 translate-y-6 transition-all duration-700"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 rounded-2xl mb-4">
                                <Icon className="w-5 h-5 text-primary-600" />
                            </div>
                            <div
                                className="text-4xl font-bold text-primary-800 leading-none mb-1"
                                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                            >
                                {value}
                            </div>
                            <div className="text-sm text-neutral-500 font-medium">{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="section-pad bg-cream-50 leaf-pattern">
                <div className="max-container">
                    <div
                        ref={(el) => { sectionRefs.current[4] = el; }}
                        className="text-center mb-16 opacity-0 translate-y-6 transition-all duration-700"
                    >
                        <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Why Homeo Health Zone
                        </span>
                        <h2
                            className="text-4xl md:text-5xl font-semibold text-primary-900 mb-5"
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            The Homeo Health Zone Difference
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            We combine classical homeopathic principles with modern diagnostic understanding to deliver deeply personalized healing.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map(({ icon: Icon, title, desc, color, iconColor, border }, i) => (
                            <div
                                key={title}
                                ref={(el) => { sectionRefs.current[5 + i] = el; }}
                                className={`${color} border ${border} rounded-3xl p-8 card-hover opacity-0 translate-y-6 transition-all duration-700`}
                                style={{ transitionDelay: `${i * 120}ms` }}
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-white rounded-2xl mb-6 shadow-sm">
                                    <Icon className={`w-6 h-6 ${iconColor}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-neutral-800 mb-3">{title}</h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CONDITIONS GRID */}
            <section className="section-pad bg-white">
                <div className="max-container">
                    <div
                        ref={(el) => { sectionRefs.current[9] = el; }}
                        className="text-center mb-16 opacity-0 translate-y-6 transition-all duration-700"
                    >
                        <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                            Conditions We Treat
                        </span>
                        <h2
                            className="text-4xl md:text-5xl font-semibold text-primary-900 mb-5"
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            Healing Across All Conditions
                        </h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                            From acute illnesses to chronic conditions, homeopathy offers gentle yet powerful solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                        {conditions.map(({ name, img }, i) => (
                            <div
                                key={name}
                                ref={(el) => { sectionRefs.current[10 + i] = el; }}
                                className="relative group rounded-3xl overflow-hidden cursor-pointer card-hover opacity-0 translate-y-6 transition-all duration-700"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-5">
                                    <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}>
                                        {name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <button
                            onClick={() => { setActivePage('treatments'); window.scrollTo({ top: 0 }); }}
                            className="btn-outline"
                        >
                            View All Treatments
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <section className="relative py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Natural herbs"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-900/85" />
                </div>
                <FloatingParticles count={15} dark />

                <div className="relative z-10 max-container text-center">
                    <div
                        ref={(el) => { sectionRefs.current[16] = el; }}
                        className="opacity-0 translate-y-6 transition-all duration-700"
                    >
                        <h2
                            className="text-4xl md:text-5xl font-semibold text-white mb-6"
                            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                        >
                            Begin Your Healing Journey Today
                        </h2>
                        <p className="text-green-100/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                            Book a personalized consultation with our expert homeopathic physician and take the first step toward lasting wellness.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={handleWhatsApp}
                                className="btn-whatsapp"
                            >
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us Now
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Wave divider before footer */}
            <div className="overflow-hidden">
                <svg className="w-full h-24 text-primary-900" viewBox="0 0 1440 100" preserveAspectRatio="none">
                    <path
                        fill="currentColor"
                        d="M0,32 C144,64 288,96 432,96 C576,96 720,64 864,48 C1008,32 1152,32 1296,53.3 C1344,64 1392,96 1440,96 L1440,0 L0,0 Z"
                    />
                </svg>
            </div>
        </div>
    );
}
