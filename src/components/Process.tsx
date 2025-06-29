import { CheckCircle } from "lucide-react";

export const Process = () => {
  const steps = [
    {
      number: "1",
      title: "Building is more than coding",
      description: "Development is about more than just writing code. It's about crafting experiences that users love and businesses rely on. That's why we don't just build apps, we build solutions that solve real-world problems."
    },
    {
      number: "2", 
      title: "Scale faster. Stress less",
      description: "Hiring, onboarding, and managing tech teams can slow you down. Our flexible team adapts to plug and deliver, so you can skip the growing pains and focus on scaling your business."
    },
    {
      number: "3",
      title: "Your success is our mission",
      description: "Your growth is our goal. We align our success with yours, collaborating to ensure every project we take on drives tangible value and propels you toward your next milestone."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="p-4 md:px-12 lg:px-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
                alt="Professional working on laptop"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-400 rounded-2xl opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20"></div>
          </div>

          {/* Right Content - Process Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};