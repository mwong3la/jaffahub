import { ArrowRight, Code, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
    return (
        <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="px-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in">
                        <div className="space-y-6">
                            <div className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-sm font-medium">
                                ✨ We are the tech partner that gets it
                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Scale and build fast,
                                <br />
                                <span className="text-teal-600">without hiring</span> struggles
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Whether you need a full product team or just a few extra hands,
                                we'll help you achieve your tech and product development goals without the hassle.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-xl">
                                Contact us
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>

                            <Button variant="outline" className="border-2 border-gray-200 hover:border-teal-600 hover:text-teal-600 px-8 py-6 text-lg rounded-xl">
                                Learn more
                            </Button>
                        </div>
                    </div>

                    {/* Right Content - Visual Elements */}
                    <div className="relative">
                        <div className="relative z-10">
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl">
                                <div className="grid grid-cols-12 gap-2 mb-6">
                                    {Array.from({ length: 144 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2 h-2 rounded-full ${Math.random() > 0.7 ? 'bg-teal-400' :
                                                    Math.random() > 0.5 ? 'bg-yellow-400' : 'bg-gray-600'
                                                }`}
                                            style={{
                                                animationDelay: `${Math.random() * 2}s`,
                                                animation: Math.random() > 0.8 ? 'pulse 2s infinite' : 'none'
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                                    <div className="h-4 bg-teal-500 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
