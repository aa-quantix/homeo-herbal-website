import React, { useEffect } from 'react';
import {
    Activity, Brain, Baby, Sparkles, Wind, Microscope,
} from 'lucide-react';

const services = [
    {
        icon: Activity,
        title: 'Chronic Disease Management',
        desc: 'Long-standing conditions like arthritis, diabetes, and hypertension treated holistically.',
        img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        icon: Brain,
        title: 'Mental Wellness',
        desc: 'Natural support for anxiety, depression, and stress — no harsh side effects.',
        img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    },
    {
        icon: Baby,
        title: 'Pediatric Care',
        desc: 'Safe, gentle treatments for children — recurrent infections, allergies, development.',
        img: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=800&q=80',
    },
    {
        icon: Sparkles,
        title: 'Skin & Hair Therapy',
        desc: 'Eczema, psoriasis, and hair loss treated from the inside out for lasting results.',
        img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        icon: Wind,
        title: 'Respiratory Health',
        desc: 'Asthma, bronchitis, and seasonal allergies managed with immune-strengthening remedies.',
        img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80',
    },
    {
        icon: Microscope,
        title: 'Hormonal Balance',
        desc: 'Thyroid health, PCOD, and menopause supported through natural regulatory stimuli.',
        img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    },
];

const Services: React.FC = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('active')),
            { threshold: 0.12 }
        );
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="pt-28 pb-24">
            {/* Header */}
            <div className="text-center px-4 mb-20 reveal">
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-green-900 mb-5">
                    Our Specializations
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    We offer a wide range of homeopathic treatments designed to promote deep healing and long-term vitality.
                </p>
            </div>

            {/* Service cards with photos */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((s, i) => (
                    <div key={i} className="reveal group rounded-3xl overflow-hidden bg-white shadow-sm border border-green-50 hover:shadow-2xl transition-all duration-500">
                        <div className="h-52 overflow-hidden">
                            <img
                                src={s.img}
                                alt={s.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                        </div>
                        <div className="p-8">
                            <div className="mb-5 text-green-700">
                                <s.icon size={36} />
                            </div>
                            <h3 className="text-xl font-serif font-bold text-green-900 mb-3">{s.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-5">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* How it works */}
            <div
                className="mt-28 mx-6 md:mx-12 lg:mx-auto max-w-6xl rounded-[3rem] py-20 px-8 text-white text-center reveal"
                style={{ background: 'linear-gradient(135deg, #14532d, #166534)' }}
            >
                <h2 className="text-4xl font-serif font-bold mb-4">The Healing Process</h2>
                <p className="text-green-200 mb-16 text-lg">What to expect during your journey with us.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { num: '01', title: 'Deep Consultation', desc: 'We listen to your full story — physical, emotional, and mental patterns.' },
                        { num: '02', title: 'Case Analysis', desc: 'Our doctors identify your unique remedy — the exact Simillimum for you.' },
                        { num: '03', title: 'Guided Healing', desc: 'Regular follow-ups track your progress and refine the treatment.' },
                    ].map((step, i) => (
                        <div key={i} className="text-center">
                            <div className="text-6xl font-serif font-bold text-emerald-400/40 mb-3">{step.num}</div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-green-200 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
