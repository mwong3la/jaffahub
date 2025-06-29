"use client"

import { CTASection } from "@/components/CTASection"
import HeroSection from "@/components/HeroSection"
import ProcessSection from "@/components/ProcessSection"
import { CheckCircle, Eye, Handshake, Heart, Target } from "lucide-react"
import { useRouter } from "next/navigation"

const AboutPage = () => {
    const router = useRouter()

    return (
        <div className="min-h-screen">
             <HeroSection
                title="Driven by Innovation "
                highlight="and Impact"
                buttonText="Get in touch"
                onButtonClick={() => router.push("/portfolio")}
                backgroundImage='/images/saas-benefit.png'
            />
            <div className="w-full">
                {/* Hero section */}
                <div className="bg-gray-50 px-6 py-16 md:px-12 lg:px-32">
                    <div className="">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                    Building <span className="text-teal-500">possibility</span>
                                    <br />
                                    from day one
                                </h1>
                            </div>
                            <div>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    At our core, we are passionate about crafting technology that empowers businesses and people to succeed.
                                    Every line of code, every design, every solution is built to drive growth and solve real-world
                                    challenges.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values section */}
                <div className="bg-[#F1F4F8] px-6 py-16 md:px-12 lg:px-32">
                    <div className="">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What drives us:</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Excellence */}
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Target className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-teal-600">Excellence</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We continually strive to exceed expectations. By constantly learning and pushing boundaries, we deliver
                                    tech solutions that stand out and make a lasting impact.
                                </p>
                            </div>

                            {/* Transparency */}
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Eye className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-teal-600">Transparency</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We believe in open, honest communication. Transparency builds trust and helps everyone understand the
                                    reasoning behind our decisions, leading to stronger, more authentic relationships.
                                </p>
                            </div>

                            {/* Humanity */}
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Heart className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-teal-600">Humanity</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    We prioritize the human experience. Our technology solutions are designed to be intuitive and
                                    user-friendly, ensuring people remain at the heart of every project we undertake.
                                </p>
                            </div>

                            {/* Integrity */}
                            <div className="space-y-4">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-teal-600">Integrity</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Integrity is essential to everything we do. By being ethical and consistent, we build trust and ensure
                                    that our work is always aligned with our clients' best interests.
                                </p>
                            </div>

                            {/* Collaboration */}
                            <div className="space-y-4 md:col-span-2 lg:col-span-1">
                                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <Handshake className="w-6 h-6 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-teal-600">Collaboration</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Collaboration drives innovation. By working closely with our clients and diverse perspectives together,
                                    we create better solutions, making us a true partner in your success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProcessSection />
            <CTASection />
        </div>
    )
}

export default AboutPage