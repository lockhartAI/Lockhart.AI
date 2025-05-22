import React from 'react';
import { Quote } from 'lucide-react';
import TypewriterText from './ui/TypewriterText';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-[#4A148C]/30 
      transition-all duration-300 h-full flex flex-col">
      <div className="mb-4">
        <Quote size={32} className="text-[#4A148C]" />
      </div>
      <p className="text-white/80 mb-6 flex-grow italic">
        "{quote}"
      </p>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-white/60 text-sm">
          {role}, {company}
        </p>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Lockhart.AI's chat agents have transformed our customer service. Response times are down 80% and customer satisfaction is at an all-time high.",
      author: "Sarah Johnson",
      role: "Customer Success Director",
      company: "TechCorp Inc."
    },
    {
      quote: "The lead generation capabilities have increased our qualified prospects by 45% in just three months. The ROI has been incredible.",
      author: "Michael Chen",
      role: "Marketing VP",
      company: "Growth Dynamics"
    },
    {
      quote: "Seamless integration with our existing CRM made adoption painless. Now our sales team has AI-enriched customer insights they never had before.",
      author: "Jessica Patel",
      role: "Sales Operations Manager",
      company: "InnovateX"
    }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <TypewriterText delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
          </TypewriterText>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Companies across industries are achieving remarkable results with our AI solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;