"use client"

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const servicePages = [
    { label: "SAAS App Development", href: "/services/saas" },
    { label: "Mobile App Development", href: "/services/mobile" },
    { label: "Web App Development", href: "/services/web" },
    { label: "Custom Software", href: "/services/custom" },
    { label: "MVP Development", href: "/services/mvp" },
    { label: "Legacy App Modernization", href: "/services/legacy" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Jaffahub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
            >
              Home
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="flex gap-8 p-6">
                    <div className="flex flex-col justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        We are the tech partner that gets it
                      </h3>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm px-4 py-2 rounded-md">
                        Contact us
                      </Button>
                    </div>
                    <div className="space-y-1 ">
                      {servicePages.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          className="flex items-center justify-between border-b px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <span className="whitespace-nowrap">{service.label}</span>
                          <span className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navItems.slice(1).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="/"
                className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              
              {/* Mobile Services Menu */}
              <div className="space-y-2">
                <div className="text-gray-700 font-medium">Services</div>
                <div className="pl-4 space-y-2">
                  {servicePages.map((service) => (
                    <a
                      key={service.label}
                      href={service.href}
                      className="block text-gray-600 hover:text-teal-600 transition-colors duration-200 text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>

              {navItems.slice(1).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
