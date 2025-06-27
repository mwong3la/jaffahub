import { ArrowRight } from "lucide-react";

export const Footer = () => {
  const services = [
    "SAAS App Development",
    "Mobile App Development", 
    "Web App Development",
    "Custom Software",
    "MVP Development",
    "Legacy App Modernization"
  ];

  const company = [
    "About",
    "Contact us"
  ];

  return (
    <footer id="contact" className="text-white py-16">
      <div className="container mx-auto px-32">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">JH</span>
              </div>
              <span className="text-xl font-bold">JeffaHub</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 JeffaHub</p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow us</h3>
            <div className="flex space-x-4">
              {['in', 'f', 't'].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors"
                >
                  <span className="text-sm font-medium">{social}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};