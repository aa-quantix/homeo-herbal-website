import { useEffect, useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Fatima Khan',
    location: 'Karachi',
    condition: 'PCOS & Hormonal Issues',
    rating: 5,
    text: 'After 3 years of suffering from PCOS and irregular periods, I found Homeo Health Zone. Within 6 months of constitutional treatment, my cycles normalized and my cysts reduced significantly. I am truly amazed by the results!',
    img: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=150',
    healed: '6 months',
  },
  {
    name: 'Ali Hassan',
    location: 'Lahore',
    condition: 'Chronic Rheumatoid Arthritis',
    rating: 5,
    text: 'I had severe joint pain for 7 years. Conventional medicine only gave temporary relief with terrible side effects. Homeopathy completely transformed my life. I now live pain-free without any medication dependency.',
    img: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=150',
    healed: '8 months',
  },
  {
    name: 'Aisha Malik',
    location: 'Islamabad',
    condition: 'Child with Recurrent Asthma',
    rating: 5,
    text: 'My 7-year-old son had asthma attacks almost every month. Dr. Sharma\'s homeopathic treatment completely stopped the attacks. It has been 2 years now and he hasn\'t needed his inhaler once!',
    img: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=150',
    healed: '4 months',
  },
  {
    name: 'Bilal Ahmed',
    location: 'Peshawar',
    condition: 'Anxiety & Panic Attacks',
    rating: 5,
    text: 'Panic attacks were ruining my career and relationships. Homeopathy addressed the root cause of my anxiety. The constitutional remedy gave me back my confidence and peace of mind. Truly life-changing!',
    img: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150',
    healed: '5 months',
  },
  {
    name: 'Zainab Ali',
    location: 'Rawalpindi',
    condition: 'Chronic Eczema',
    rating: 5,
    text: 'My eczema was so severe I couldn\'t wear short sleeves. After trying endless steroid creams, homeopathy cleared my skin completely in 7 months. No chemicals, no side effects — just pure healing.',
    img: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=150',
    healed: '7 months',
  },
  {
    name: 'Hassan Khan',
    location: 'Multan',
    condition: 'Thyroid Disorder',
    rating: 5,
    text: 'My TSH levels were dangerously high and I was on permanent thyroid medication. After 10 months of homeopathic treatment, my thyroid function normalized and I no longer need medication!',
    img: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=150',
    healed: '10 months',
  },
];

const videoTestimonials = [
  { name: 'Priya K.', condition: 'PCOS', thumbnail: 'https://images.pexels.com/photos/3807733/pexels-photo-3807733.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Amit S.', condition: 'Arthritis', thumbnail: 'https://images.pexels.com/photos/7659571/pexels-photo-7659571.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { name: 'Kavya R.', condition: 'Skin Issues', thumbnail: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=400' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

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

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden pt-20">
      <section className="relative pt-32 pb-24 px-4 md:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Healing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/92 to-primary-700/75" />
        </div>
        <div className="relative z-10 max-container text-center">
          <span className="inline-block text-green-300 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Real Results</span>
          <h1
            className="text-5xl md:text-6xl font-semibold text-white mb-6"
            style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
          >
            Patient Stories
          </h1>
          <p className="text-green-100/80 text-xl max-w-2xl mx-auto leading-relaxed">
            Thousands of lives transformed through the gentle power of homeopathy. Read their stories.
          </p>
        </div>
      </section>

      <section className="section-pad bg-primary-50">
        <div className="max-container">
          <div
            ref={(el) => { sectionRefs.current[0] = el; }}
            className="opacity-0 translate-y-6 transition-all duration-700"
          >
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src={testimonials[current].img}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-white font-semibold">{testimonials[current].name}</p>
                    <p className="text-green-200 text-sm">{testimonials[current].location}</p>
                  </div>
                </div>

                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-primary-200 mb-6" />

                  <div className="hidden lg:flex gap-1 mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  <div className="inline-block bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 self-start border border-primary-100">
                    {testimonials[current].condition}
                  </div>

                  <p className="text-neutral-700 text-lg leading-relaxed mb-8 italic">
                    "{testimonials[current].text}"
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-primary-900">{testimonials[current].name}</p>
                      <p className="text-neutral-500 text-sm">{testimonials[current].location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primary-600 font-bold text-lg" style={{ fontFamily: 'Cormorant Garamond' }}>
                        {testimonials[current].healed}
                      </p>
                      <p className="text-neutral-400 text-xs">healing period</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-8 flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 bg-neutral-100 hover:bg-primary-600 text-neutral-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? 'bg-primary-600 w-6' : 'bg-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 bg-neutral-100 hover:bg-primary-600 text-neutral-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="max-container">
          <div
            ref={(el) => { sectionRefs.current[1] = el; }}
            className="text-center mb-14 opacity-0 translate-y-6 transition-all duration-700"
          >
            <span className="inline-block text-primary-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Patient Reviews</span>
            <h2
              className="text-4xl font-semibold text-primary-900"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif' }}
            >
              What Our Patients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map(({ name, location, condition, rating, text, img, healed }, i) => (
              <div
                key={name}
                ref={(el) => { sectionRefs.current[2 + i] = el; }}
                className="bg-white border border-neutral-100 rounded-3xl p-7 card-hover shadow-sm opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <p className="font-semibold text-primary-900 text-sm">{name}</p>
                      <p className="text-neutral-400 text-xs">{location}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(rating)].map((_, ri) => (
                      <Star key={ri} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="bg-primary-50 text-primary-600 text-xs font-medium px-3 py-1.5 rounded-full inline-block mb-4">
                  {condition}
                </div>

                <p className="text-neutral-600 text-sm leading-relaxed mb-4 italic">"{text}"</p>

                <div className="flex items-center gap-1.5 pt-4 border-t border-neutral-50">
                  <div className="w-2 h-2 bg-primary-400 rounded-full" />
                  <span className="text-xs text-neutral-400">Healed in </span>
                  <span className="text-xs font-semibold text-primary-600">{healed}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-primary-900">
        <div className="max-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '8,000+', label: 'Patients Healed' },
              { value: '98%', label: 'Satisfaction Rate' },
              { value: '4.9/5', label: 'Average Rating' },
              { value: '200+', label: '5-Star Reviews' },
            ].map(({ value, label }, i) => (
              <div
                key={label}
                ref={(el) => { sectionRefs.current[8 + i] = el; }}
                className="opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: 'Cormorant Garamond' }}
                >
                  {value}
                </div>
                <div className="text-primary-300 text-sm font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
