import { Code, Users, Rocket } from "lucide-react";

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="px-32">
        {/* Header */}
        <div className="grid grid-cols-2 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-teal-600">heritage</span> is tied to yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to help businesses connect with users by delivering innovative, 
            functional, and visually captivating web and mobile solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Code,
              title: "We tailor solutions",
              description: "When you connect to us a project whether it's an idea or a startup that's uniquely suited to your goals and challenges.",
              image: "/lovable-uploads/f5a23d95-1e28-4cfc-a0b6-8f891471074d.png"
            },
            {
              icon: Users,
              title: "We listen before we code",
              description: "We dive deep into your business context. Our developers get to know what makes you different. We translate your vision into technical solutions that drive impact.",
              image: "/lovable-uploads/f5a23d95-1e28-4cfc-a0b6-8f891471074d.png"
            },
            {
              icon: Rocket,
              title: "We build together",
              description: "You're part of the team. We work with your schedule and deadlines. These solutions that resonate with your users and keep you ahead of the curve.",
              image: "/lovable-uploads/f5a23d95-1e28-4cfc-a0b6-8f891471074d.png"
            }
          ].map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img 
                  src={`https://images.unsplash.com/photo-${index === 0 ? '1581091226825-a6a2a5aee158' : index === 1 ? '1461749280684-dccba630e2f6' : '1488590528505-98d2b5aba04b'}?auto=format&fit=crop&w=800&q=80`}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-600">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};