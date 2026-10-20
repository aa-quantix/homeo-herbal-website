import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Chronic', 'Skin', 'Children', 'Women', 'Mental', 'Respiratory'];

const treatments = [
  { name: 'Rheumatoid Arthritis', category: 'Chronic', img: 'https://images.pexels.com/photos/7659571/pexels-photo-7659571.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Constitutional treatment for joint inflammation, pain, and degeneration using remedies like Rhus tox, Bryonia, and Calcarea carb.', remedies: ['Rhus Toxicodendron', 'Bryonia Alba', 'Calcarea Carbonica'] },
  { name: 'Eczema & Psoriasis', category: 'Skin', img: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Deep constitutional remedies that address skin conditions at their root, eliminating the need for steroid creams.', remedies: ['Sulphur', 'Graphites', 'Arsenicum Album'] },
  { name: 'Childhood Asthma', category: 'Children', img: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Gentle, effective homeopathic protocols proven to reduce asthma frequency and severity in children.', remedies: ['Arsenicum Album', 'Natrum Sulph', 'Blatta Orientalis'] },
  { name: 'PCOS/Hormonal Balance', category: 'Women', img: 'https://images.pexels.com/photos/3807733/pexels-photo-3807733.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Holistic approach to polycystic ovary syndrome, regulating hormones, periods, and improving fertility naturally.', remedies: ['Sepia', 'Pulsatilla', 'Natrum Muriaticum'] },
  { name: 'Anxiety & Depression', category: 'Mental', img: 'https://images.pexels.com/photos/3760275/pexels-photo-3760275.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Deep-acting constitutional remedies that gently restore emotional balance and mental wellbeing.', remedies: ['Natrum Muriaticum', 'Ignatia', 'Aurum Metallicum'] },
  { name: 'Sinusitis', category: 'Respiratory', img: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Effective homeopathic treatment for chronic and acute sinusitis without dependency on antibiotics.', remedies: ['Kali Bichromicum', 'Pulsatilla', 'Hydrastis'] },
  { name: 'Thyroid Disorders', category: 'Chronic', img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Constitutional treatment for hypothyroidism, hyperthyroidism, and autoimmune thyroid conditions.', remedies: ['Iodum', 'Thyroidinum', 'Calcarea Carbonica'] },
  { name: 'Acne & Hair Loss', category: 'Skin', img: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Inside-out treatment addressing hormonal, nutritional, and constitutional causes of skin and hair issues.', remedies: ['Silicea', 'Natrum Muriaticum', 'Phosphorus'] },
  { name: 'Recurrent Colds in Kids', category: 'Children', img: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=500', desc: "Build your child's immunity and reduce frequency of recurrent respiratory infections naturally.", remedies: ['Tuberculinum', 'Bacillinum', 'Calc Phos'] },
  { name: 'Endometriosis', category: 'Women', img: 'https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Holistic constitutional treatment addressing painful periods and reducing endometrial tissue growth.', remedies: ['Sepia', 'Lachesis', 'Natrum Mur'] },
  { name: 'Insomnia', category: 'Mental', img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Gentle, non-habit-forming remedies that restore natural sleep patterns and address underlying anxiety.', remedies: ['Coffea Cruda', 'Passiflora', 'Nux Vomica'] },
  { name: 'Bronchitis', category: 'Respiratory', img: 'https://images.pexels.com/photos/7659571/pexels-photo-7659571.jpeg?auto=compress&cs=tinysrgb&w=500', desc: 'Natural treatment for both acute and chronic bronchitis, reducing inflammation and improving lung function.', remedies: ['Antimonium Tart', 'Drosera', 'Hepar Sulph'] },
];

export default function Treatments() {
  const [activeCategory, setActiveCategory] = useState('All');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeCategory === 'All' ? treatments : treatments.filter((t) => t.category === activeCategory);

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

  return (
    <div className="overflow-hidden pt-20">
      {/* Hero */}
      <section className="relative pt-32 pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Homeopathic bottles"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-primary-700/70" />
        </div>
        <div className="relative z-10 max-container text-center">
          <span className="inline-block text-green-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">What We Treat</span>
          <h1
            className="text-5xl md:text-6xl font-semibold text-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Conditions & Treatments
          </h1>
          <p className="text-green-100/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of homeopathic treatments, each crafted to your individual constitution.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-pad bg-white">
        <div className="max-container">
          {/* Category Filters */}
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="flex flex-wrap justify-center gap-3 mb-14 opacity-0 translate-y-6 transition-all duration-700"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Treatment Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(({ name, category, img, desc, remedies }, i) => (
              <div
                key={name}
                className="group bg-white border border-neutral-100 rounded-3xl overflow-hidden shadow-sm card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600/90 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                      {category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                      {name}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-neutral-600 text-sm leading-relaxed mb-5">{desc}</p>

                  <div>
                    <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-3">Key Remedies</p>
                    <div className="flex flex-wrap gap-2">
                      {remedies.map((r) => (
                        <span key={r} className="bg-primary-50 text-primary-700 text-xs px-3 py-1.5 rounded-full border border-primary-100">
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homeopathy Principles */}
      <section className="section-pad bg-primary-50">
        <div className="max-container">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="text-center mb-14 opacity-0 translate-y-6 transition-all duration-700"
          >
            <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">The Science</span>
            <h2
              className="text-4xl md:text-5xl font-semibold text-primary-900"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              Principles of Homeopathy
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Similia Similibus Curentur', subtitle: '"Like Cures Like"', desc: 'A substance that causes symptoms in healthy people can, in diluted form, treat similar symptoms in sick people — the foundational law of homeopathy.' },
              { title: 'The Single Remedy', subtitle: 'Constitutional Prescribing', desc: 'One precisely selected remedy addresses the totality of symptoms — physical, mental, and emotional — simultaneously for complete healing.' },
              { title: 'Minimum Dose', subtitle: 'Infinitesimal Potency', desc: 'Remedies are diluted and potentized to trigger the body\'s innate healing response without toxic side effects, even in infants and pregnant women.' },
            ].map(({ title, subtitle, desc }, i) => (
              <div
                key={title}
                ref={(el) => { sectionRefs.current[2 + i] = el; }}
                className="bg-white rounded-3xl p-8 border border-primary-100 card-hover opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-primary-600 font-bold" style={{ fontFamily: 'Cormorant Garamond' }}>
                    {String.fromCharCode(8544 + i)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-1" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>
                  {title}
                </h3>
                <p className="text-primary-500 text-sm italic mb-4">{subtitle}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
