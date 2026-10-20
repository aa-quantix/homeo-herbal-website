
import { useEffect, useRef, useState } from 'react';
import { Phone, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '923258242383';

const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return isMobile
        ? `whatsapp://send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`
        : `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

const contactMethods = [
    {
        icon: MessageCircle,
        title: 'WhatsApp',
        value: '+92 325 8242383',
        desc: 'Quick replies within 30 minutes',
        action: 'Chat Now',
        color: 'bg-[#25D366]',
        hoverColor: 'hover:bg-[#1db954]',
        onClick: () => window.location.href = getWhatsAppLink('Hello, I would like to book a consultation.'),
    },
    {
        icon: Phone,
        title: 'Phone',
        value: '+92 325 8242383', // Placeholder, update later
        desc: 'Mon–Sat, 10AM – 7PM',
        action: 'Call Now',
        color: 'bg-primary-600',
        hoverColor: 'hover:bg-primary-700',
        href: 'tel:+923258242383',
    },
];

const clinicInfo = [
    { icon: MapPin, label: 'Address', value: 'Huma Block 2, Flat 8, Allama Iqbal Town, Lahore' },
    { icon: Clock, label: 'Hours', value: 'Mon–Fri: 10AM – 7PM | Sat: 10AM – 2PM' },
];

export default function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (e.isIntersecting) e.target.classList.add('opacity-100', '!translate-y-0');
            }),
            { threshold: 0.1 }
        );
        sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
        return () => observer.disconnect();
    }, []);

    const handleComposeEmail = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = formState.subject || `Message from ${formState.name || 'website visitor'}`;
        const body = `Name: ${formState.name || 'Not provided'}\nEmail: ${formState.email || 'Not provided'}\n\n${formState.message}`;
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('areejahmed7787@gmail.com')}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank');
    };

    const handleWhatsAppForm = () => {
        const msg = `Hello, I am ${formState.name}. I would like a consultation for ${formState.subject || 'my query'}. My contact: ${formState.email}.`;
        window.location.href = getWhatsAppLink(msg);
    };

    return (
        <div className="overflow-hidden pt-20">
            {/* Hero */}
            <section className="relative pt-32 pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Contact"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 to-primary-700/70" />
                </div>
                <div className="relative z-10 max-container text-center">
                    <span className="inline-block text-green-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Get In Touch</span>
                    <h1
                        className="text-5xl md:text-6xl font-semibold text-white mb-6"
                        style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                    >
                        Begin Your<br />Healing Journey
                    </h1>
                    <p className="text-green-100/80 text-xl max-w-2xl mx-auto leading-relaxed">
                        Reach out to us via WhatsApp, phone, or our consultation form. We are here to help you heal.
                    </p>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="section-pad bg-white">
                <div className="max-container">
                    <div className="grid md:grid-cols-2 gap-6 mb-20">
                        {contactMethods.map(({ icon: Icon, title, value, desc, action, color, hoverColor, onClick, href }, i) => (
                            <div
                                key={title}
                                ref={(el) => { sectionRefs.current[i] = el; }}
                                className="text-center bg-neutral-50 border border-neutral-100 rounded-3xl p-10 card-hover opacity-0 translate-y-6 transition-all duration-700"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-primary-900 mb-1">{title}</h3>
                                {href ? (
                                    <a href={href} className="text-primary-600 font-medium mb-2 inline-block underline hover:text-primary-700">{value}</a>
                                ) : (
                                    <p className="text-primary-600 font-medium mb-2">{value}</p>
                                )}
                                <p className="text-neutral-500 text-sm mb-6">{desc}</p>
                                {href ? (
                                    <a
                                        href={href}
                                        className={`w-full py-3 rounded-2xl text-white font-semibold text-sm ${color} ${hoverColor} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg inline-block`}
                                    >
                                        {action}
                                    </a>
                                ) : (
                                    <button
                                        onClick={onClick}
                                        className={`w-full py-3 rounded-2xl text-white font-semibold text-sm ${color} ${hoverColor} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg`}
                                    >
                                        {action}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Form + Info */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Info */}
                        <div
                            ref={(el) => { sectionRefs.current[4] = el; }}
                            className="opacity-0 translate-y-6 transition-all duration-700 delay-200"
                        >
                            <h2
                                className="text-3xl font-semibold text-primary-900 mb-2"
                                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
                            >
                                Clinic Information
                            </h2>
                            <p className="text-neutral-500 text-sm mb-8">Visit us in person or reach us through any of the channels below.</p>

                            <div className="space-y-4">
                                {clinicInfo.map(({ icon: Icon, label, value }) => (
                                    <div key={label} className="flex items-start gap-4 p-4 bg-primary-50 rounded-2xl border border-primary-100">
                                        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="w-full">
                                            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-0.5">{label}</p>
                                            <p className="text-neutral-700 text-sm leading-relaxed">{value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Map placeholder */}
                            <div className="relative rounded-3xl overflow-hidden h-56 bg-primary-100 w-full max-w-md">
                                <img
                                    src="https://images.pexels.com/photos/4099388/pexels-photo-4099388.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt="Clinic location"
                                    className="w-full h-full object-cover opacity-50"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary-900/40">
                                    <MapPin className="w-8 h-8 text-white mb-2" />
                                    <p className="text-white font-semibold">Homeo Health Zone Homeopathy</p>
                                    <p className="text-green-200 text-sm">Huma Block 2, Flat 8, Allama Iqbal Town, Lahore</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
