import { useEffect, useRef } from 'react';
import { Award, BookOpen, Heart, Leaf, Star, CheckCircle } from 'lucide-react';

const timeline = [
  { year: '2009', event: 'Founded Homeo Health Zone Homeopathy Clinic', desc: 'Started with a mission to bring authentic, classical homeopathy to our community.' },
  { year: '2012', event: 'Expanded to Chronic Disease Specialization', desc: 'Developed specialized protocols for complex chronic conditions.' },
  { year: '2015', event: 'Reached 2,000 Patients Milestone', desc: 'Growing community trust led to our first clinic expansion.' },
  { year: '2018', event: 'Research Publication in Homeopathic Medicine', desc: 'Published clinical findings on constitutional treatment outcomes.' },
  { year: '2021', event: 'Launched Teleconsultation Services', desc: 'Bringing healing to patients across the country via digital platform.' },
  { year: '2024', event: '8,000+ Patients Served', desc: 'Continuing our legacy of natural healing with remarkable success rates.' },
];

const qualifications = [
  'BHMS (Bachelor of Homeopathic Medicine & Surgery)',
  'MD Homeopathy – Constitutional Medicine',
  'Fellowship in Clinical Homeopathy',
  'Advanced Course in Pediatric Homeopathy',
  'Certified in Hahnemannian Classical Homeopathy',
  'Member, National Homeopathic Council',
];

const values = [
  { icon: Heart, title: 'Patient First', desc: 'Every treatment decision centers around your unique constitution, symptoms, and life circumstances.' },
  { icon: Leaf, title: "Nature's Wisdom", desc: "Guided by Hahnemann's principles and centuries of clinical evidence from nature's pharmacy." },
  { icon: Star, title: 'Excellence', desc: 'Continuous learning and research ensures our patients receive the most effective modern homeopathic care.' },
  { icon: BookOpen, title: 'Education', desc: 'We empower patients with knowledge about their health journey and the healing process.' },
];

export default function About() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', '!translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Herbal medicine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 to-primary-700/70" />
        </div>

        <div className="relative z-10 max-container text-center">
          <span className="inline-block text-green-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4 animate-fade-in">
            Our Story
          </span>
          <h1
            className="text-5xl md:text-6xl font-semibold text-white mb-6 animate-fade-in"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Healing Lives Since 2009
          </h1>
          <p className="text-green-100/80 text-xl max-w-3xl mx-auto leading-relaxed">
            Rooted in the timeless wisdom of classical homeopathy and driven by compassion for every patient's well-being.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="section-pad bg-white">
        <div className="max-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              ref={(el) => { sectionRefs.current[0] = el; }}
              className="opacity-0 translate-y-6 transition-all duration-800"
            >
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Dr. Homeopathic Physician"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-3xl p-6 shadow-xl border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-800" style={{ fontFamily: 'Cormorant Garamond' }}>15+</div>
                      <div className="text-xs text-neutral-500 font-medium">Years Expert Care</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              ref={(el) => { sectionRefs.current[1] = el; }}
              className="opacity-0 translate-y-6 transition-all duration-800 delay-200"
            >
              <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Meet Your Healer
              </span>
              <h2
                className="text-4xl md:text-5xl font-semibold text-primary-900 mb-6"
                style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
              >
                Dr. Priya Sharma<br />
                <span className="text-2xl text-neutral-500 font-normal">MD Homeopathy</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                With over 15 years of dedicated practice in classical homeopathy, Dr. Priya Sharma has transformed thousands of lives through deeply personalized constitutional treatments.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Her approach combines rigorous classical homeopathic methodology with modern understanding of disease, focusing on the whole person rather than isolated symptoms. Every patient receives thorough evaluation and a uniquely tailored healing protocol.
              </p>

              <div className="space-y-3 mb-8">
                {qualifications.map((q) => (
                  <div key={q} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary-600 mt-0.5 shrink-0" />
                    <span className="text-neutral-700 text-sm">{q}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
                {[
                  { value: '8K+', label: 'Patients' },
                  { value: '200+', label: 'Conditions' },
                  { value: '98%', label: 'Satisfaction' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="text-2xl font-bold text-primary-700" style={{ fontFamily: 'Cormorant Garamond' }}>{value}</div>
                    <div className="text-xs text-neutral-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-pad bg-primary-50">
        <div className="max-container">
          <div
            ref={(el) => { sectionRefs.current[2] = el; }}
            className="text-center mb-16 opacity-0 translate-y-6 transition-all duration-700"
          >
            <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Philosophy</span>
            <h2
              className="text-4xl md:text-5xl font-semibold text-primary-900"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Values That Guide Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                ref={(el) => { sectionRefs.current[3 + i] = el; }}
                className="bg-white rounded-3xl p-8 text-center card-hover opacity-0 translate-y-6 transition-all duration-700 shadow-sm"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">{title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="max-container">
          <div
            ref={(el) => { sectionRefs.current[7] = el; }}
            className="text-center mb-16 opacity-0 translate-y-6 transition-all duration-700"
          >
            <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Journey</span>
            <h2
              className="text-4xl md:text-5xl font-semibold text-primary-900"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Milestones of Healing
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary-100 hidden md:block" />
            <div className="space-y-10">
              {timeline.map(({ year, event, desc }, i) => (
                <div
                  key={year}
                  ref={(el) => { sectionRefs.current[8 + i] = el; }}
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center opacity-0 translate-y-6 transition-all duration-700 ${
                    i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 card-hover">
                      <div
                        className="text-3xl font-bold text-primary-600 mb-2"
                        style={{ fontFamily: 'Cormorant Garamond' }}
                      >
                        {year}
                      </div>
                      <h3 className="text-lg font-semibold text-primary-900 mb-2">{event}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-6 h-6 bg-primary-600 rounded-full border-4 border-primary-100 shrink-0 relative z-10" />

                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
