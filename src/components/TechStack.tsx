import { CheckCircle } from "lucide-react";

export const TechStack = () => {
  const services = [
    {
      icon: "📱",
      title: "SaaS App Development", 
      description: "Scalable SaaS apps designed to handle growth effortlessly and Deliver seamless user experiences.",
      features: [
        "Build cloud, server-agnostic architectures",
        "Create connected ecosystems",
        "Deliver user-focused experiences"
      ]
    },
    {
      icon: "📲",
      title: "Mobile App Development",
      description: "High-focused mobile apps for iOS and Android designed for optimal performance, smart, and engagement.",
      features: [
        "Native iOS and Android",
        "Cross-platform compatibility frameworks",
        "Custom APIs and third-party integration"
      ]
    },
    {
      icon: "🌐", 
      title: "Web App Development",
      description: "High-performance web apps, responsive design solutions, and cutting-edge cloud architecture that delivers standard standards.",
      features: [
        "Responsive design solutions",
        "Scalable, high-level architectures", 
        "Secure development environments"
      ]
    },
    {
      icon: "⚙️",
      title: "Custom Software",
      description: "Custom software solutions for diverse business needs, challenges, including integration, automation, and transformation.",
      features: [
        "Tailored to business needs",
        "Easy local party integration",
        "Scalable for future growth"
      ]
    },
    {
      icon: "🚀",
      title: "MVP Development", 
      description: "Quick MVP development to launch your market validation early. Optimized, validated tools, and iterative based technology for rapid success.",
      features: [
        "Rapid prototyping for validation",
        "Agile development frameworks",
        "Time and cost-effective solutions"
      ]
    },
    {
      icon: "🔄",
      title: "Legacy App Modernization",
      description: "Transform existing for today's functionality, performance, and scalability needs without disrupting business operations.",
      features: [
        "Migrate to modern stacks",
        "Minimal data loss and disruption", 
        "Enhanced security compliance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="p-4 md:px-12 lg:px-32">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything we do.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};